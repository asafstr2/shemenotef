import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  translateCart,
} from "app/slices/cartSlice";
import Card from "components/cards/CardForCart";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { CURRENCY, shipping } from "util/const";
import { translate } from "util/translate";
import { RootState } from "app/store";
import {
  MainWrapper,
  Title,
  subtext,
  button,
  flexText,
  flexAllign,
  total,
} from "./Cart.style";
const classes = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#53c4ac",
    },
  },
  title: {
    display: "flex",
    width: "80%",
    margin: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid lightgrey",
  },
  subtext: {
    color: "grey",
    marginInlineEnd: "3%",
  },
  button: {
    margin: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flextext: {
    color: "grey",
    display: "flex",
    margin: "auto",
    width: "76%",
    justifyContent: "space-between",
    marginTop: "3%",
  },
  flexallign: {
    flex: 1,
    textAlign: "end",
  },
  total: {
    flex: 1,
    textAlign: "end",
    fontSize: "1.5rem",
  },
};
const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const lang = useSelector((state: RootState) => state.lang.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotals({}));
  }, [cart, dispatch]);
  useEffect(() => {
    dispatch(translateCart({}));
  }, [dispatch, lang]);
  if (cart?.cartItems.length === 0) {
    return <Link to="/">Add some items </Link>;
  }
  return (
    //@ts-ignore *
    <div style={classes.root}>
      <div style={classes.title}>
        <h2>{translate("Order")} </h2>
        <h5 style={classes.subtext}>{translate("EditCart")}</h5>
      </div>
      <div>
        {cart.cartItems.map((product) => (
          <Card {...product} key={product._id} />
        ))}
      </div>
      <div style={classes.flextext}>
        <span>{translate("Subtotal")}</span>
        <span
          //  @ts-ignore
          style={classes.flexallign}
        >{`${cart.cartTotalAmount}${CURRENCY}`}</span>
      </div>
      <div style={classes.flextext}>
        <span>{translate("Shipping")} </span>
        {/* @ts-ignore */}
        <span style={classes.flexallign}>{`${shipping}${CURRENCY}`}</span>
      </div>
      <div style={{ ...classes.flextext, color: "black" }}>
        <span> {translate("total")} </span>
        {/* @ts-ignore */}
        <span style={classes.total}>{`${Number(
          shipping + cart.cartTotalAmount
        )}${CURRENCY}`}</span>
      </div>
      <div style={classes.button}>
        <Button
          onClick={() => navigate("/checkout")}
          variant="contained"
          color="primary"
          fullWidth={false}
          size="large"
        >
          {translate("proceedToCheckOut")}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
