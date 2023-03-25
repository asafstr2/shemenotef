import React from "react";
import { Products } from "app/types/core";

import {
  Container,
  Title,
  Subtitle,
  CardContainer,
  CarusaleContainer,
} from "./homepage.style";
import Carusale from "components/utils/Carusale";

import Loader from "components/utils/Loader";
import Card from "components/cards/CardForHomePage";
interface Props {
  productLoading: boolean;
  products: Products[];
}
function Homepage({ productLoading, products }: Props) {
  if (productLoading) return <Loader />;
  return (
    <Container>
      <Title>Shemen Otef</Title>
      <Subtitle>Shop our collection of organic oils and soaps</Subtitle>
      <CarusaleContainer>
        <Carusale products={products} productLoading={productLoading} />
      </CarusaleContainer>
      <CardContainer>
        {products?.map((product: Products) => (
          <Card product={product} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default Homepage;
