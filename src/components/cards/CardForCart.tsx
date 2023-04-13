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
} from "./CardForCart.style";
import Paper from "@mui/material/Paper";

interface Props {
  image: any;
  title: string;
  deliveryDate: string;
  imageHeight?: number;
  cartQuantity: number;
  price: { value: number; currency: string };
  createdAt?: string;
}

function CardForCart(props: Props) {
  const {
    image,
    title,
    deliveryDate,
    imageHeight = 80,
    cartQuantity,
    price,
    createdAt,
  } = props;

  return (
    <Paper elevation={1}>
      <CardWrapper>
        <ImageWrapper>
          <CardMedia
            component="img"
            height={imageHeight}
            width={imageHeight}
            image={image}
          />
        </ImageWrapper>
        <TitleWrapper>
          <TitleMain>
            <Typography gutterBottom variant="body1" component="p" noWrap>
              {title}
            </Typography>
          </TitleMain>
          <TitleSub>
            <Typography variant="overline" component="p" noWrap>
              {deliveryDate || createdAt ? (
                <Moment format="DD/MM/YY">{deliveryDate ?? createdAt}</Moment>
              ) : (
                translate("date not specified")
              )}
            </Typography>
          </TitleSub>
        </TitleWrapper>
        <ButtonWrapper>
          <Button {...props} />
        </ButtonWrapper>
        {cartQuantity && price && (
          <PriceWrapper>
            <span>{`${cartQuantity * price.value}${price.currency}`}</span>
          </PriceWrapper>
        )}
      </CardWrapper>
    </Paper>
  );
}

export default CardForCart;
