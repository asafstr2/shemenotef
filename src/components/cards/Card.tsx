import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import NavLink from "components/utils/Link";
import { useLocation, useParams } from "react-router-dom";
import { translate } from "util/translate";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "app/slices/cartSlice";
interface Props {
  image: any;
  maxWidth?: number;
  imageHeight?: number;
  addToCartText?: string;
  cartState?: boolean;
  removeFromCartText?: string;
  decreaseCartText?: string;
  _id: string;
  title: string;
  description: string;
  cartQuantity: number;
}
export default function ActionAreaCard(props: Props) {
  const dispatch = useDispatch();
  let location = useLocation();
  const {
    image,
    maxWidth = 345,
    imageHeight = 140,
    addToCartText = translate("Add to cart"),
    cartState = false,
    removeFromCartText = "remove from cart",
    decreaseCartText = "-",
    _id,
    title,
    description,
  } = props;

  return (
    <NavLink
      to={`/modal/product/${_id}`}
      state={{ props, modalLocation: location }}
    >
      <Card sx={{ maxWidth }}>
        <CardActionArea>
          <CardMedia component="img" height={imageHeight} image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(addToCart(props))}
          >
            {cartState ? "+" : addToCartText}
          </Button>
          {cartState && (
            <>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(decreaseCart(props))}
              >
                {decreaseCartText}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(removeFromCart(props))}
              >
                {removeFromCartText}
              </Button>
            </>
          )}
          <Typography variant="body2" color="text.secondary">
            {props.cartQuantity}
          </Typography>
        </CardActions>
      </Card>
    </NavLink>
  );
}
