import styled from "styled-components";

import { styled as mui, Theme } from "@mui/material/styles";

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
export const FloatingQuantityDiv = styled.div`
  width: fit-content;
  padding: 2px;
  text-align: center;
  left: 3%;
  top: 3%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00adb5;
  font-size: 0.7em;
`;

type ImageProps = {
  src: string;
  alt: string;
  category?: boolean; // add category prop here
};
export const Image = mui("img")<ImageProps>(
  ({ theme, category }: { theme: Theme; category?: boolean }) => ({
    width: "100%",
    height: "350px",
    objectFit: "cover",
    flex: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      opacity: 0.8,
      scale: category ? "1.05" : "",
    },
  })
);

export const Button = mui("button")(
  ({ theme, category }: { theme: Theme; category?: boolean }) => ({
    backgroundColor: theme.palette.primary.light,
    border: "none",
    color: "white",
    padding: "0.75rem 1.5rem",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1rem",
    marginTop: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      opacity: 0.8,
    },
  })
);

export const CardFooter = mui("div")({
  width: "100%",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const Card = mui("div")(({ theme }: { theme: Theme }) => ({
  // width: "25%",
  margin: "2rem",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 0.3125rem 0.875rem 0 rgba(129, 129, 129, 0.2)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  position: "relative",
  "&:hover": {
    [`${FloatingDiv}`]: {
      visibility: "visible",
      top: "60%",
    },
  },
  "&:not(:hover)": {
    [`${FloatingDiv}`]: {
      visibility: "hidden",
    },
  },
}));

export const Title = mui("h3")({
  textDecoration: "none",
  border: "none",
});

export const Price = mui("p")({
  textDecoration: "none",
  border: "none",
  color: "#00adb5",
  fontWeight: "bold",
});
