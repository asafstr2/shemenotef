import React from "react";
import { Products } from "app/types/core";

import { Card, Image, Button } from "./CardForHomePage.style";
import { addToCart } from "app/slices/cartSlice";
import { useDispatch } from "react-redux";
import NavLink from "components/utils/Link";
import { useLocation } from "react-router-dom";
function CardForHomePage({ product }: { product: Products }) {
  const dispatch = useDispatch();
  let location = useLocation();

  return (
    <Card key={product._id}>
      <NavLink
        to={`/modal/product/${product._id}`}
        state={{ props: product, modalLocation: location }}
      >
        <>
          <Image src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{`${product.price.value}${product.price.currency}`}</p>
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </Button>
        </>
      </NavLink>
    </Card>
  );
}

export default CardForHomePage;
