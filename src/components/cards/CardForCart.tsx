import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "components/buttons/PlusMinusButton";
import Moment from "react-moment";
import { translate } from "util/translate";
import {
  CardWrapper,
  ImageWrapper,
  TitleWrapper,
  TitleMain,
  TitleSub,
  ButtonWrapper,
  PriceWrapper,
  Border,
} from "./CardForCart.style";

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
      <CardWrapper>
        <ImageWrapper>
          <CardMedia component="img" height={imageHeight} image={image} />
        </ImageWrapper>
        <TitleWrapper>
          <TitleMain>
            <Typography gutterBottom variant="h5" component="span" noWrap>
              {title}
            </Typography>
          </TitleMain>
          <TitleSub>
            <Typography variant="h5" component="span" noWrap>
              {deliveryDate ? (
                <Moment format="DD/MM/YY">{deliveryDate}</Moment>
              ) : (
                translate("date not specified")
              )}
            </Typography>
          </TitleSub>
        </TitleWrapper>
        <ButtonWrapper>
          <Button {...props} />
        </ButtonWrapper>
        <PriceWrapper>
          <span>{`${cartQuantity * price.value}${price.currency}`}</span>
        </PriceWrapper>
      </CardWrapper>
      <Border />
    </>
  );
}

export default CardForCart;
