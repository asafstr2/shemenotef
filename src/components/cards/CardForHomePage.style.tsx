import styled from "styled-components";



export const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  flex: 3;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  background-color: #00adb5;
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
    opacity: 0.8;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const FloatingDiv = styled.div`
  width: 143px;
  height: 35px;
  text-align: center;
  background-color: #000;
  opacity: 0.8;
  border-radius: 8px;
  left: 50%;
  top: 70%;
  transform: translateX(-50%) translateY(-20%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.3s ease-in-out;
  color: white;
  font-size: 0.7em;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
export const Card = styled.div`
  width: 25%;
  margin: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0.3125rem 0.875rem 0 rgba(129, 129, 129, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  position: relative;

  &:hover {
    ${FloatingDiv} {
      visibility: visible;
      top: 60%;
    }
  }
  &:not(:hover) {
    ${FloatingDiv} {
      visibility: hidden;
    }
  }
`;

export const Title = styled.h3`
  text-decoration: none;
  border: none;
`;
export const Price = styled.p`
  text-decoration: none;
  border: none;
  color: #00adb5;
  font-weight: bold;
`;