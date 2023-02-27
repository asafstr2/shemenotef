import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { CURRENCY, shipping } from "util/const";
import { truncateString } from "util/functions";
import { translate } from "util/translate";
import { Data } from "./types";
import { RootState } from "app/store";
import { getTotals } from "app/slices/cartSlice";
interface Props {
  data: Data;
}
export default function Review({ data }: Props) {
  let cart = useSelector((state: RootState) => state.cart);
  const { cartTotalQuantity, cartTotalAmount } = useSelector(getTotals);
  cart = {
    ...cart,
    cartTotalQuantity,
    cartTotalAmount: cartTotalAmount + shipping,
  };
  const products = cart.cartItems.map((product) => ({
    name: product.title,
    desc: truncateString(product.description),
    price: CURRENCY + product.price.value * product.cartQuantity,
    cartQuantity: product.cartQuantity,
  }));
  products.push({
    name: translate("Shipping"),
    desc: "",
    price: CURRENCY + shipping,
    cartQuantity: 1,
  });
  const addresses = [
    data.shipping?.address1,
    data.shipping?.address2,
    data.shipping?.city,
    data.shipping?.zip,
    data.shipping?.country,
  ];
  const payments = [
    { name: translate("CardType"), detail: "Visa" },
    { name: translate("cardName"), detail: data.payment?.cardName },
    { name: translate("cardNumber"), detail: data.payment?.cardNumber },
    { name: translate("expDate"), detail: data.payment?.expDate },
  ];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {translate("orderSummery")}
      </Typography>
      <List disablePadding>
        {products.map((product, i) => (
          <ListItem key={product.name + i} sx={{ py: 1, px: 0, gap: 10 }}>
            <ListItemText
              primary={product.name}
              secondary={`${product.desc} ${product.cartQuantity}x `}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            />
            <Typography variant="body2">{`${product.price}`}</Typography>
          </ListItem>
        ))}

        <ListItem
          sx={{
            py: 3,
            px: 0,
            borderTop: 1,
            borderBottom: 1,
            borderColor: "lightgrey",
          }}
        >
          <ListItemText
            primary={translate("total")}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {CURRENCY + cart.cartTotalAmount}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            {translate("Shipping")}
          </Typography>
          <Typography
            gutterBottom
          >{`${data.shipping?.firstName} ${data.shipping?.lastName}`}</Typography>
          <Typography gutterBottom>{addresses.join(" ")}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
