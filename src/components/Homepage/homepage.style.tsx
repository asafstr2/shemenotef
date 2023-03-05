import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;
`;

export const Card = styled.div`
  width: 20%;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px; /* Set a fixed height */
  object-fit: cover; /* Scale the image to cover the container */
  margin-bottom: 1rem;
`;

export const Button = styled.button`
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
export const CarusaleContainer = styled.div`
  margin-bottom: 80px;
`;
