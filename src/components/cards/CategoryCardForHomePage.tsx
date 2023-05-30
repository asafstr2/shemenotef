import { Category } from "app/types/core";
import {
  Card,
  Image,
  CardFooter,
  FloatingDiv,
  Title,
  FloatingQuantityDiv,
  ImageContainer,
} from "./CardForHomePage.style";

import NavLink from "components/utils/Link";

function CardForHomePage({ category }: { category: Category }) {
  return (
    <Card key={category._id}>
      <NavLink to={`/categories/${category._id}`}>
        <>
          <ImageContainer>
            <Image src={category.image} alt={category.title} category />
          </ImageContainer>
          <CardFooter>
            <Title>{category.title}</Title>
          </CardFooter>
          <FloatingDiv>לצפיה מהירה</FloatingDiv>
          <FloatingQuantityDiv>{`${category.products.length} מוצרים`}</FloatingQuantityDiv>
        </>
      </NavLink>
    </Card>
  );
}

export default CardForHomePage;
