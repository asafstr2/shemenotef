import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const CardContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "3rem",
  width: "100%",
});
export const StyledDivider = styled("hr")(({ theme }) => ({
  width: "10%",
  height: "3px",
  margin: "20px auto 20px auto",
  backgroundColor: theme.palette.primary.light,
}));
export const StyledTitle = styled("h2")(({ theme }) => ({
  marginBlockStart: "100px",
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
}));
