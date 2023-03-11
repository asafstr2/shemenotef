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
import NavLink from "components/utils/Link";
import { useLocation, useParams } from "react-router-dom";

interface Props {
  productLoading: boolean;
  products: Products[];
}
function Homepage({ productLoading, products }: Props) {
  const dispatch = useDispatch();
  let location = useLocation();

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
            <NavLink
              to={`/modal/product/${product._id}`}
              state={{ props: product, modalLocation: location }}
            >
              <>
                <Image src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price.value}</p>
                <Button onClick={() => dispatch(addToCart(product))}>
                  Add to cart
                </Button>
              </>
            </NavLink>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Homepage;
