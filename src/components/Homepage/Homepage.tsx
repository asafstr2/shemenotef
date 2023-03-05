import React from "react";
import { Products } from "app/types/core";

import {
  Container,
  Title,
  Subtitle,
  CardContainer,
  Card,
  Image,
  Button,
  CarusaleContainer,
} from "./homepage.style";
import Carusale from "components/utils/Carusale";
import { addToCart } from "app/slices/cartSlice";
import { useDispatch } from "react-redux";

interface Props {
  productLoading: boolean;
  products: Products[];
}
function Homepage({ productLoading, products }: Props) {
  const dispatch = useDispatch();

  if (productLoading) return <>loading</>;
  return (
    <Container>
      <Title>Shemen Otef</Title>
      <Subtitle>Shop our collection of organic oils and soaps</Subtitle>
      <CarusaleContainer>
        <Carusale products={products} productLoading={productLoading} />
      </CarusaleContainer>
      <CardContainer>
        {products?.map((product: Products) => (
          <Card key={product._id}>
            <Image src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price.value}</p>
            <Button onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </Button>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Homepage;
