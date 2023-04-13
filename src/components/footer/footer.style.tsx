import { styled } from "@mui/material/styles";

export const RootContainer = styled("footer")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#232f3e",
  color: "#fff",
  padding: "32px 16px",
});

export const Logo = styled("img")({
  height: 36,
  marginBottom: 16,
});

export const LinksContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: 16,
});

export const Link = styled("a")({
  color: "#fff",
  margin: "0 16px",
  textDecoration: "none",
  fontSize: 14,

  "&:hover": {
    textDecoration: "underline",
  },
});

export const Disclaimer = styled("p")({
  fontSize: 12,
  opacity: 0.6,
});

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const MainContent = styled("main")({
  flexGrow: 1,
});
