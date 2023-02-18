import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "components/buttons/PlusMinusButton";
import Moment from "react-moment";
import { translate } from "util/translate";
const classes = {
  card: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "auto",
    marginTop: "10px",
  },
  title: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginInlineStart: "3%",
  },
  titleMain: {
    fontSize: "1rem",
    width: "100%",
    textAlign: "start",
  },
  titleSub: {
    fontSize: "0.8rem",
    color: "grey",
    width: "100%",
    textAlign: "start",
  },
  button: {
    marginInlineStart: "auto",
  },
  price: {
    marginInlineStart: "auto",
    width: "10%",
  },
  pic: {
    width: "10%",
  },
  border: {
    margin: "auto",
    marginTop: "20px",
    borderBottom: "1px solid lightgrey",
    width: "80%",
  },
};
interface Props {
  image: any;
  title: string;
  deliveryDate: string;
  imageHeight?: number;
  cartQuantity: number;
  price: { value: number; currency: string };
}
function CardForCart(props: Props) {
  const {
    image,
    title,
    deliveryDate,
    imageHeight = 80,
    cartQuantity,
    price,
  } = props;

  return (
    <>
      <div style={classes.card}>
        <div style={classes.pic}>
          <CardMedia component="img" height={imageHeight} image={image} />
        </div>
        <div
          //@ts-ignore
          style={classes.title}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="span"
            //@ts-ignore
            style={classes.titleMain}
            noWrap
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            component="span"
            //@ts-ignore
            style={classes.titleSub}
            noWrap
          >
            {deliveryDate ? (
              <Moment format="DD/MM/YY">{deliveryDate}</Moment>
            ) : (
              translate("date not specified")
            )}
          </Typography>
        </div>
        <div style={classes.button}>
          <Button {...props} />
        </div>
        <div style={classes.price}>
          <span>{`${cartQuantity * price.value}${price.currency}`}</span>
        </div>
      </div>
      <div style={classes.border}></div>
    </>
  );
}

export default CardForCart;
