import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "app/slices/cartSlice";
import { translate } from "util/translate";
import { AdminButtons } from "components/buttons/AdminButtons";
import Carusale from "components/utils/Carusale";

interface Props {
  imageHeight?: number;
  addToCartText?: string;
  title: string;
  description: string;
  _id: string;
  images: any;
}
function ProductPage() {
  const dispatch = useDispatch();

  let location = useLocation();

  const {
    imageHeight = 200,
    addToCartText = translate("Add to cart"),
    title,
    description,
    _id,
    images,
  }: Props = location?.state?.props;
  const imagesPreperation = (images: any) => {
    return images.map((cluodineryImage: any, i: number) => ({
      image: cluodineryImage.secure_url,
      _id: i,
    }));
  };
  const carusaleStyle = {
    height: imageHeight,
    color: "#fff",
    background: "#364d79",
    width: "70%",
    margin: "auto",
    zIndex: 1600,
  };
  return (
    <Card sx={{ maxWidth: "50vw", maxHeight: "50vh" }}>
      <CardActionArea>
        <div>
          <Carusale
            //@ts-ignore
            style={carusaleStyle}
            products={imagesPreperation(images)}
            productLoading={false}
          />
        </div>
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
          onClick={() => dispatch(addToCart(location?.state?.props))}
        >
          {addToCartText}
        </Button>
        <AdminButtons productId={_id} title={title} />
      </CardActions>
    </Card>
  );
}

export default ProductPage;
