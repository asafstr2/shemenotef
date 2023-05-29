import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ContactUsMain from "components/contact-us/ContactUsMain";
import { Container } from "@mui/material";
function Booking() {
  return (
    <BookingMainSection>
      <StyledTitle> מערכת הזמנות טיפולים</StyledTitle>
      <StyledDivider />
      <ResponsiveContainer>
        <RightContainer>
          <Typography gutterBottom variant="body1" component="p" noWrap>
            כאן ניתן להזמין תורים לבדיקה מקיפה
          </Typography>
          <TextContainer>
            <PriceTextNoColor>מחיר :</PriceTextNoColor>
            <PriceText>₪180 </PriceText>
          </TextContainer>
          <Image>
            <img
              src="https://static1.s123-cdn-static-a.com/ready_uploads/media/7160726/800_5fabd81c7b10b.jpg"
              alt="booking"
            ></img>
          </Image>
        </RightContainer>
        <LeftContainer>
          <ContactUsMain booking />
        </LeftContainer>
      </ResponsiveContainer>
    </BookingMainSection>
  );
}

export default Booking;

const BookingMainSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  paddingBlockStart: theme.spacing(4),
}));

const PriceText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "1.5rem",
}));
const PriceTextNoColor = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
}));
const StyledTitle = styled("h2")(({ theme }) => ({
  margin: "0 auto",
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
}));

const StyledDivider = styled("hr")(({ theme }) => ({
  width: "10%",
  height: "3px",
  margin: "20px auto",
  backgroundColor: theme.palette.primary.light,
}));
const ResponsiveContainer = styled(Container)(({ theme }) => ({
  padding: "20px",
  width: "70%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",

    width: "100%",
    padding: "0",
  },
}));
const TextContainer = styled(Box)({
  display: "flex",
  gap: "5px",
});
const LeftContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
});
const RightContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

const Image = styled("div")(({ theme }) => ({
  width: "300px",
  height: "300px",
  "& img": {
    width: "300px",
    height: "300px",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px",
    },
  },
  "@media only screen and (max-width: 600px)": {
    width: "100px",
    height: "100px",
  },
}));
