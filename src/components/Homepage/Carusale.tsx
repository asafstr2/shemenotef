import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const images = [
  "https://static1.s123-cdn-static-a.com/uploads/7229067/2000_642af1f427d66.jpg",
  "https://static1.s123-cdn-static-a.com/uploads/7229067/2000_642af569e24f5_filter_642b192044a18.jpg",
  "https://static1.s123-cdn-static-a.com/ready_uploads/media/205816/2000_5ceec231698e8.jpg",
];

const Container = styled.div`
  width: 100%;
  height: 600px;
  perspective: 1000px;
  position: relative;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding: 18px 30px;

  &:hover {
    background-color: #00adb5;
    border-color: #00adb5;
    color: white;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    padding: 12px 24px;
    font-size: 0.8rem;
  }
`;

const HeaderText = styled.h1`
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 4rem;

  @media (max-width: 768px) {
    bottom: 120px;
    font-size: 2rem;
  }
`;

const Text = styled.h2`
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  color: white;

  @media (max-width: 768px) {
    bottom: 90px;
    font-size: 1.2rem;
  }
`;

const RotatingPicture = ({
  scrollToCardContainer,
}: {
  scrollToCardContainer: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Image src={images[currentImageIndex]} />
      <Image src={images[(currentImageIndex + 1) % images.length]} />
      <Image src={images[(currentImageIndex + 2) % images.length]} />
      <HeaderText>Shemen otef</HeaderText>
      <Text>oils for body and soul</Text>
      <Button onClick={() => scrollToCardContainer()}>לחנות</Button>
    </Container>
  );
};

export default RotatingPicture;
