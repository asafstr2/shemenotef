import styled from "styled-components";

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
