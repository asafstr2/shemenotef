import React, { useRef } from "react";
import { Products, Category } from "app/types/core";

import {
  Container,
  CardContainer,
  StyledDivider,
  StyledTitle,
} from "./homepage.style";
import Carusale from "./Carusale";
import AboutMe from "./AboutMe";
import Loader from "components/utils/Loader";
import Card from "components/cards/ProductCardForHomePage";
import CategoryCard from "components/cards/CategoryCardForHomePage";

import MyBlogSection from "components/blog/BlogHomepageSection";
import ContactUsMain from "components/contact-us/ContactUsMain";
import Booking from "components/booking/Booking";
import { Link, useNavigate } from "react-router-dom";
import { AdminButton } from "components/buttons/AdminButtons";

interface Props {
  productLoading: boolean;
  products: Products[];
  categories: Category[];
}
const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
  window.scrollTo({ top: ref.current?.offsetTop, behavior: "smooth" });
};
function Homepage({ productLoading, products, categories }: Props) {
  const navigate = useNavigate();
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
      <AboutMe />
      <div ref={CardContainerRef}> </div>
      <StyledTitle>מוצרים מומלצים</StyledTitle>
      <div>
        <AdminButton
          handleAction={() => navigate(`/admin/addProduct`)}
          text="הוסף מוצר חדש"
        />{" "}
      </div>
      <StyledDivider />
      <CardContainer>
        {adminPrefferedProducts?.map((product: Products) => (
          <Card product={product} key={product._id} />
        ))}
      </CardContainer>
      <StyledTitle> קטגוריות</StyledTitle>
      <div>
        <AdminButton
          handleAction={() => navigate(`/admin/addCategory`)}
          text="הוסף קטגוריה חדשה"
        />{" "}
      </div>
      <StyledDivider />
      <CardContainer>
        {categories?.map((category: Category) => (
          <CategoryCard category={category} key={category._id} />
        ))}
      </CardContainer>
      <MyBlogSection />
      <ContactUsMain />
      <Booking />
    </Container>
  );
}

export default Homepage;
