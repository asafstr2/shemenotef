import { styled } from "@mui/material/styles";

export const CardWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "16px 8px",
  "@media (max-width: 600px)": {
    padding: "12px 4px",
  },
});

export const ImageWrapper = styled("div")({
  display: "flex",
  flexShrink: 0,
  width: "80px",
  height: "80px",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "12px",
  "@media (max-width: 600px)": {
    width: "80px",
    height: "80px",
  },
});

export const TitleWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const TitleMain = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "2px",
  marginInlineStart: "15%",
  "@media (max-width: 600px)": {
    marginBottom: "2px",
    marginInlineStart: "0%",
  },
});

export const TitleSub = styled("div")({
  display: "flex",
  alignItems: "center",
  color: "#666",
  marginInlineStart: "15%",
  "@media (max-width: 600px)": {
    fontSize: "14px",
    marginInlineStart: "0%",
  },
});

export const ButtonWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "32px",
  "@media (max-width: 600px)": {
    minWidth: "28px",
  },
});

export const PriceWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  minWidth: "50px",
  fontSize: "18px",
  fontWeight: "bold",
  "@media (max-width: 600px)": {
    fontSize: "16px",
    minWidth: "40px",
  },
});

export const Border = styled("div")({
  borderBottom: "1px solid #eee",
});
