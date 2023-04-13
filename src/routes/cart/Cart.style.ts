import { styled } from "@mui/material/styles";

export const CartWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "360px",
  padding: "16px",
}));

export const CartItemsWrapper = styled("div")(({ theme }) => ({
  maxHeight: "400px",
  overflowY: "auto",
  marginBottom: "16px",
}));

export const CartItemWrapper = styled("div")(({ theme }) => ({
  marginBottom: "16px",
}));

export const CartSummaryWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ButtonWrapper = styled("div")(({ theme }) => ({
  maxWidth: "85%",
}));

export const CheckoutButton = styled("button")(({ theme }) => ({
  width: "100%",
  border: "none",
  background: theme.palette.primary.light,
  color: "white",
  fontSize: "16px",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));

export const RootWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",

  "& .MuiButton-containedPrimary": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const TitleWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  margin: "auto",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

export const Subtext = styled("h5")(({ theme }) => ({
  color: theme.palette.grey[500],
  marginInlineEnd: "3%",
}));

export const FlexText = styled("div")(({ theme }) => ({
  color: theme.palette.grey[500],
  display: "flex",
  margin: "auto",
  width: "100%",
  justifyContent: "space-between",
  marginTop: "50px",
  "@media (max-width: 600px)": {
    marginTop: "3%",
  },
}));

export const FlexAlign = styled("span")(({ theme }) => ({
  flex: 1,
  textAlign: "end",
}));

export const Total = styled("span")(({ theme }) => ({
  flex: 1,
  textAlign: "end",
  fontSize: "1.5rem",
}));

export const PopoverWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  padding: "16px",
}));

export const ProductWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "8px",
}));

export const ProductImage = styled("img")(({ theme }) => ({
  height: "64px",
  width: "64px",
  objectFit: "contain",
}));

export const ProductTitle = styled("span")(({ theme }) => ({
  marginLeft: "16px",
  fontSize: "16px",
}));

export const QuantityWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));
export const QuantityButton = styled("button")(({ theme }) => ({
  width: "24px",
  height: "24px",
  backgroundColor: theme.palette.grey[200],
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  color: theme.palette.text.primary,
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
  "&:disabled": {
    cursor: "not-allowed",
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.text.disabled,
  },
}));

export const QuantityText = styled("span")(({ theme }) => ({
  margin: "0 8px",
  fontSize: "16px",
  fontWeight: "bold",
}));

export const PriceWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export const PriceText = styled("span")(({ theme }) => ({
  fontSize: "16px",
  marginRight: "8px",
  fontWeight: "bold",
}));

export const Footer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: theme.spacing(5),
}));
