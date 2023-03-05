// // CartPopover.tsx

// import React from "react";

// import CardForCart from "components/cards/CardForCart";
// import { useSelector } from "react-redux";
// import { RootState } from "app/store";
// import Popover from "@mui/material/Popover";
// import {
//   CartWrapper,
//   CartItemsWrapper,
//   CartItemWrapper,
//   CartSummaryWrapper,
//   TitleWrapper,
//   PriceWrapper,
//   ButtonWrapper,
//   CheckoutButton,
// } from "./Cart.style

// interface Props {
//   open: boolean;
//   anchorEl: null | HTMLElement;
//   onClose: () => void;
// }

// function CartPopover(props: Props) {
//   const { open, anchorEl, onClose } = props;
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const cartItemsList = cartItems.map((item:any) => (
//     <CartItemWrapper key={item.id}>
//       <CardForCart
//         image={item.image}
//         title={item.title}
//         deliveryDate={item.deliveryDate}
//         cartQuantity={item.cartQuantity}
//         price={item.price}
//       />
//     </CartItemWrapper>
//   ));

//   const cartTotalPrice = cartItems.reduce(
//     (total, item) => total + item.price.value * item.cartQuantity,
//     0
//   );

//   return (
//     <Popover
//       open={open}
//       anchorEl={anchorEl}
//       onClose={onClose}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "right",
//       }}
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//     >
//       <CartWrapper>
//         <CartItemsWrapper>{cartItemsList}</CartItemsWrapper>
//         <CartSummaryWrapper>
//           <TitleWrapper>Cart Summary</TitleWrapper>
//           <PriceWrapper>Total: {`${cartTotalPrice} USD`}</PriceWrapper>
//           <ButtonWrapper>
//             <CheckoutButton>Checkout</CheckoutButton>
//           </ButtonWrapper>
//         </CartSummaryWrapper>
//       </CartWrapper>
//     </Popover>
//   );
// }

// export default CartPopover;

import React from "react";

function CartForPopover() {
  return <div>CartForPopover</div>;
}

export default CartForPopover;
