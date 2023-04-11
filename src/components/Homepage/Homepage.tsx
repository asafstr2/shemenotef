import React, { useRef } from "react";
import { Products, Category } from "app/types/core";

import { Container, CardContainer } from "./homepage.style";
import Carusale from "./Carusale";
import AboutMe from "./AboutMe";
import Loader from "components/utils/Loader";
import Card from "components/cards/ProductCardForHomePage";
import CategoryCard from "components/cards/CategoryCardForHomePage";

//@ts-ignore
// import Fade from "react-reveal/Fade";
import { styled } from "@mui/material/styles";

const StyledDivider = styled("hr")(({ theme }) => ({
  width: "10%",
  height: "3px",
  margin: "20px auto 20px auto",
  backgroundColor: theme.palette.primary.light,
}));
const StyledTitle = styled("h2")(({ theme }) => ({
  marginBlockStart: "100px",
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
}));
interface Props {
  productLoading: boolean;
  products: Products[];
  categories: Category[];
}
const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
  window.scrollTo({ top: ref.current?.offsetTop, behavior: "smooth" });
};
function Homepage({ productLoading, products, categories }: Props) {
  const adminPrefferedProducts = products.filter(
    (product: Products) => product.featured
  );
  const CardContainerRef = useRef<HTMLDivElement>(null);

  if (productLoading) return <Loader />;
  const handleScrollToElement = (myRef: React.RefObject<HTMLElement>) => {
    scrollToRef(myRef);
  };
  const scrollToCardContainer = () => handleScrollToElement(CardContainerRef);
  return (
    <Container>
      <Carusale scrollToCardContainer={scrollToCardContainer} />
      {/* <Fade bottom cascade> */}
      <AboutMe />
      {/* </Fade> */}
      <div ref={CardContainerRef}> </div>
      {/* <Fade bottom cascade> */}
      <StyledTitle>מוצרים מומלצים</StyledTitle>
      <StyledDivider />
      <CardContainer>
        {adminPrefferedProducts?.map((product: Products) => (
          <Card product={product} key={product._id} />
        ))}
      </CardContainer>
      <StyledTitle> קטגוריות</StyledTitle>
      <StyledDivider />
      <CardContainer>
        {categories?.map((category: Category) => (
          <CategoryCard category={category} key={category._id} />
        ))}
      </CardContainer>
      {/* </Fade> */}
    </Container>
  );
}

export default Homepage;
