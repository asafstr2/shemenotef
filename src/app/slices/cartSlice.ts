import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Cart } from "app/types/core";
import { coupons } from "util/const";
import { RootState } from "app/store";
const initialState: Cart = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") ?? "")
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  couponCodes: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        if (!window.location.href.includes("cart")) {
          toast.success(
            state.cartItems[existingIndex].title +
              " x " +
              state.cartItems[existingIndex].cartQuantity,
            { position: "top-left" }
          );
        }
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", { position: "top-left" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = nextCartItems;
        toast.warn("Product removed from cart", { position: "top-left" });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", { position: "top-left" });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    // getTotals(state, action) {
    //   let { total, quantity } = state.cartItems.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, cartQuantity } = cartItem;
    //       const itemTotal = price.value * cartQuantity;

    //       cartTotal.total += itemTotal;
    //       cartTotal.quantity += cartQuantity;

    //       return cartTotal;
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     }
    //   );
    //   total = parseFloat(total.toFixed(2));
    //   state.couponCodes.forEach((couponCode) => {
    //     // @ts-ignore
    //     const coupon = coupons[couponCode];
    //     const { value, operator } = coupon;

    //     state.cartTotalAmount = eval(
    //       `${state.cartTotalAmount} ${operator} ${value}`
    //     );
    //   });
    //   state.cartTotalQuantity = quantity;
    //   state.cartTotalAmount = total;
    //   return state;
    // },
    // getTotals(state, action) {
    //   let total = 0;
    //   let quantity = 0;
    //   let { cartTotalAmount } = state;

    //   for (const cartItem of state.cartItems) {
    //     const { price, cartQuantity } = cartItem;
    //     const itemTotal = price.value * cartQuantity;
    //     total += itemTotal;
    //     quantity += cartQuantity;
    //   }

    //   total = parseFloat(total.toFixed(2));

    //   for (const couponCode of state.couponCodes) {
    //     // @ts-ignore
    //     const coupon = coupons[couponCode];
    //     console.log({ coupons, couponCode, coupon });
    //     if (!coupon) continue;
    //     const { value, operator } = coupon;
    //     cartTotalAmount = eval(`${cartTotalAmount} ${operator} ${value}`);
    //   }
    //   console.log({ cartTotalAmount });
    //   state.cartTotalQuantity = quantity;
    //   state.cartTotalAmount = cartTotalAmount || total;
    //   return state;
    // },
    translateCart(state, action) {
      const lang: "hebrew" | "russian" = JSON.parse(
        localStorage.language ?? '"english"'
      );
      const mutateResponse = state.cartItems.map((cartItem) => ({
        ...cartItem,
        title:
          cartItem.otherLanguageTitle[lang] ??
          cartItem.otherLanguageTitle.default,
        description:
          cartItem.otherLanguageDescription[lang] ??
          cartItem.otherLanguageDescription.default,
      }));
      state.cartItems = mutateResponse;
      console.log({ mutateResponse, item: state.cartItems });
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    applyCoupon(state, action: { type: string; payload: string }) {
      const couponCode = action.payload;
      // @ts-ignore
      const coupon = coupons[couponCode];
      const lcCoupon = state.couponCodes.includes(couponCode);
      if (coupon && !lcCoupon) {
        const { value, operator } = coupon;
        // eslint-disable-next-line no-eval
        state.cartTotalAmount = eval(
          `${state.cartTotalAmount} ${operator} ${value}`
        );
        toast.success(`Coupon '${couponCode}' applied`, {
          position: "top-left",
        });
        state.couponCodes.push(couponCode);
      } else {
        toast.error(lcCoupon ? "Already used" : "Invalid coupon code", {
          position: "top-left",
        });
      }
      return state;
    },
  },
});
export const getTotals = (state: RootState) => {
  let total = 0;
  let quantity = 0;
  let cartTotalAmount = 0;

  for (const cartItem of state.cart.cartItems) {
    const { price, cartQuantity } = cartItem;
    const itemTotal = price.value * cartQuantity;
    total += itemTotal;
    quantity += cartQuantity;
  }

  total = parseFloat(total.toFixed(2));

  for (const couponCode of state.cart.couponCodes) {
    // @ts-ignore
    const coupon = coupons[couponCode];
    console.log({ coupons, couponCode, coupon });
    if (!coupon) continue;
    const { value, operator } = coupon;
    cartTotalAmount = eval(`${total} ${operator} ${value}`);
  }
  cartTotalAmount = cartTotalAmount || total;
  return { cartTotalAmount, cartTotalQuantity: quantity };
};
export const {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  translateCart,
  applyCoupon,
} = cartSlice.actions;

export default cartSlice.reducer;



