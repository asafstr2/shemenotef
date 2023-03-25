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
  width: 500px;
  height: 206px;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

function Carusale({ products, productLoading }: Props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const { productid } = useParams();
  if (productLoading) return <Loader />;
  return (
    <>
      {isOpen && (
        <Lightbox
          //@ts-ignore
          mainSrc={images[photoIndex].url}
          //@ts-ignore
          nextSrc={images[(photoIndex + 1) % images.length].url}
          //@ts-ignore
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      <CarusaleContainer>
        <Carousel
          autoplay
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {products?.map((product) => (
            <div
              key={product._id}
              onClick={() => {
                if (!productid) {
                  setIsOpen(true);
                  setImages(product.images);
                }
              }}
            >
              {productid ? (
                <Image
                  width="100%"
                  height="260px"
                  src={product.image}
                  alt={product.title}
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <img
                  height="260px"
                  width="100%"
                  src={product.image}
                  alt={product.title}
                  style={{ objectFit: "contain" }}
                />
              )}
            </div>
          ))}
        </Carousel>
      </CarusaleContainer>
    </>
  );
}

export default Carusale;
