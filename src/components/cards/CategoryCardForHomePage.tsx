import { Products } from "app/types/core";
import {
  Card,
  Image,
  Button,
  CardFooter,
  FloatingDiv,
  Title,
  Price,
} from "./CardForHomePage.style";

import { addToCart } from "app/slices/cartSlice";
import { useDispatch } from "react-redux";
import NavLink from "components/utils/Link";
import { useLocation } from "react-router-dom";
import { translate } from "util/translate";
function CardForHomePage({ product }: { product: Products }) {
  const dispatch = useDispatch();
  let location = useLocation();

  return (
    <Card key={product._id}>
      <NavLink
        to={`/modal/product/${product._id}`}
        state={{ props: product, modalLocation: location }}
      >
        <>
          <Image src={product.image} alt={product.title} />
          <CardFooter>
            <Title>{product.title}</Title>
          </CardFooter>
          <FloatingDiv>לצפיה מהירה</FloatingDiv>
        </>
      </NavLink>
      <Button onClick={() => dispatch(addToCart(product))}>
        {translate("Add to cart")}
      </Button>
    </Card>
  );
}

export default CardForHomePage;
