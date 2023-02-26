import React from "react";
import styled from "styled-components";
import { Products } from "app/types/core";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
`;

const Card = styled.div`
  width: 25%;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e8e41;
  }
`;

const products = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    price: "$20.99",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 2,
    name: "Organic Beanie",
    price: "$15.99",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 3,
    name: "Organic Tote Bag",
    price: "$12.99",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 4,
    name: "Organic Baseball Cap",
    price: "$18.99",
    image: "https://via.placeholder.com/200x200",
  },
];

interface Props {
  productLoading: boolean;
  products: Products[];
}
function Homepage({ productLoading, products }: Props) {
  if (productLoading) return <></>;
  return (
    <Container>
      <Title>Organic Merch</Title>
      <Subtitle>
        Shop our collection of organic clothing and accessories
      </Subtitle>
      <CardContainer>
        {products?.map((product: Products) => (
          <Card key={product._id}>
            <Image src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price.value}</p>
            <Button>Add to cart</Button>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Homepage;
