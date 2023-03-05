import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  translateCart,
  applyCoupon,
} from "app/slices/cartSlice";
import Card from "components/cards/CardForCart";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { CURRENCY, shipping } from "util/const";
import { translate } from "util/translate";
import { RootState } from "app/store";
import {
  RootWrapper,
  TitleWrapper,
  Subtext,
  FlexText,
  FlexAlign,
  Total,
  ButtonWrapper,
  Footer,
} from "./Cart.style";
import { TextField } from "@mui/material";

const Cart = ({
  handleCartVisibleChange,
}: {
  handleCartVisibleChange?: (val: boolean) => void;
}) => {
  let cart = useSelector((state: RootState) => state.cart);
  const { cartTotalQuantity, cartTotalAmount } = useSelector(getTotals);
  cart = { ...cart, cartTotalQuantity, cartTotalAmount };
  const lang = useSelector((state: RootState) => state.lang.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cupponsField, setCupponsFields] = useState("");

  useEffect(() => {
    dispatch(translateCart({}));
  }, [dispatch, lang]);
  if (cart?.cartItems.length === 0) {
    return <Link to="/">Add some items </Link>;
  }
  return (
    <RootWrapper>
      <TitleWrapper>
        <h2>{translate("Order")}</h2>
        <Subtext>{translate("EditCart")}</Subtext>
      </TitleWrapper>
      <div>
        {cart.cartItems.map((product) => (
          <Card {...product} key={product._id} />
        ))}
      </div>
      <FlexText>
        <span>{translate("Subtotal")}</span>
        <FlexAlign>{`${cart.cartTotalAmount}${CURRENCY}`}</FlexAlign>
      </FlexText>
      <FlexText>
        <span>{translate("Shipping")} </span>
        <FlexAlign>{`${shipping}${CURRENCY}`}</FlexAlign>
      </FlexText>
      <FlexText>
        <span> {translate("total")} </span>
        <Total>{`${Number(shipping + cart.cartTotalAmount)}${CURRENCY}`}</Total>
      </FlexText>
      <Footer>
        {/* <ButtonWrapper>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(applyCoupon(cupponsField));
            }} //@ts-ignore
          >
            <TextField
              name={"cuppons"}
              value={cupponsField}
              onChange={(e) => setCupponsFields(e.target.value)}
              required
              id={"cuppons"}
              label={translate("cuppons")}
            />
          </form>
        </ButtonWrapper> */}
        <ButtonWrapper>
          <Button
            onClick={() => {
              handleCartVisibleChange?.(false);
              navigate("/checkout");
            }}
            variant="contained"
            color="primary"
            fullWidth={true}
            size="small"
          >
            {translate("proceedToCheckOut")}
          </Button>
        </ButtonWrapper>
      </Footer>
    </RootWrapper>
  );
};

export default Cart;
