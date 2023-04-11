import { Category } from "app/types/core";
import {
  Card,
  Image,
  CardFooter,
  FloatingDiv,
  Title,
} from "./CardForHomePage.style";

import NavLink from "components/utils/Link";

function CardForHomePage({ category }: { category: Category }) {
  return (
    <Card key={category._id}>
      <NavLink to={`/categories/${category._id}`}>
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
