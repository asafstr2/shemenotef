import React, { useState } from "react";
import { Carousel } from "antd";
import Loader from "components/utils/Loader";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css"; // This only needs to be imported once in your app
import { useParams } from "react-router-dom";
import { Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Carusale.css";
import { Products } from "app/types/core";
import styled from "styled-components";

interface Props {
  products: Products[];
  productLoading: boolean;
}

export const CarusaleContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Carusale({ products, productLoading }: Props) {
  if (productLoading) return <Loader />;
  return (
    <>
      <CarusaleContainer>
        <Carousel
          autoplay
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          style={{ height: "100%", width: "100%" }}
        >
          {products?.map((product) => (
            <div key={product._id} style={{ height: "100%", width: "100%" }}>
              <img
                height="100%"
                width="100%"
                src={product.image}
                alt={product.title}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </Carousel>
      </CarusaleContainer>
    </>
  );
}

export default Carusale;
