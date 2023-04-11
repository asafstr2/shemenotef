import React, { useRef } from "react";
import { Products } from "app/types/core";

import {
  Container,
  Title,
  Subtitle,
  CardContainer,
  CarusaleContainer,
} from "./homepage.style";
import Carusale from "./Carusale";
import AboutMe from "./AboutMe";
import Loader from "components/utils/Loader";
import Card from "components/cards/CardForHomePage";
interface Props {
  productLoading: boolean;
  products: Products[];
}
const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
  window.scrollTo({ top: ref.current?.offsetTop, behavior: "smooth" });
};

function Homepage({ productLoading, products }: Props) {
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
      <div ref={CardContainerRef}>
        <CardContainer>
          {products?.map((product: Products) => (
            <Card product={product} />
          ))}
        </CardContainer>
      </div>
    </Container>
  );
}

export default Homepage;
