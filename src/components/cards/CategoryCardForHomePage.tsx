import { Category, Products } from "app/types/core";
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
function CardForHomePage({ category }: { category: Category }) {
  const dispatch = useDispatch();
  let location = useLocation();

  return (
    <Card key={category._id}>
      <NavLink
        to={`/categories/${category._id}`}
        state={{ props: category, modalLocation: location }}
      >
        <>
          <Image src={category.image} alt={category.title} category />
          <CardFooter>
            <Title>{category.title}</Title>
          </CardFooter>
          <FloatingDiv>לצפיה מהירה</FloatingDiv>
        </>
      </NavLink>
    </Card>
  );
}

export default CardForHomePage;
