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

interface Props {
  products: Products[];
  productLoading: boolean;
}

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
      <div style={{ width: "60%", height: "206px", margin: "auto" }}>
        <Carousel
          autoplay
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {products?.map((product) => (
            <div
              style={{ width: "100%", margin: "auto" }}
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
                  style={{ margin: "auto", objectFit: "contain" }}
                  width="100%"
                  height="260px"
                  src={product.image}
                  alt={product.title}
                />
              ) : (
                <img
                  style={{ margin: "auto", objectFit: "contain" }}
                  height="260px"
                  width="100%"
                  src={product.image}
                  alt={product.title}
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Carusale;
