import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ClockIcon from "@mui/icons-material/AccessTime";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RtlProvider from "util/RtlProvider";
import { useReportMutation } from "app/services/contactUsApi";

const ContactForm = ({ booking = false }): JSX.Element => {
  const [report, { isLoading }] = useReportMutation();
  const [form, setForm] = useState({});
  const handleSubmit = (e: any): void => {
    report(form);
    e.preventDefault();
    // Handle form submission logic here
  };
  const handleChange = (e: any) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <Container>
      {!booking && (
        <>
          {" "}
          <StyledTitle>צור קשר</StyledTitle>
          <StyledDivider />
        </>
      )}
      {!booking && (
        <ContactContainerWrapper>
          <ContactContainer>
            <TextWrapper>
              <IconWrapper href="https://wa.me/0542772792" target="_blank">
                <WhatsAppIcon />
              </IconWrapper>
              תמרה 0542772792
            </TextWrapper>
            <TextWrapper>
              <IconWrapper href="mailto:shemenotef@gmail.com" target="_blank">
                <MailOutlineIcon />
              </IconWrapper>
              Shemenotef@gmail.com
            </TextWrapper>
            <TextWrapper>
              <IconWrapperNoHover>
                <ClockIcon />
              </IconWrapperNoHover>
              בתיאום מראש
            </TextWrapper>
          </ContactContainer>
        </ContactContainerWrapper>
      )}
      <RtlProvider>
        <Form onSubmit={handleSubmit}>
          <StyledTextField
            label="שם"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="name"
          />
          <StyledTextField
            label="טלפון לחזרה"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="phone"
          />
          <StyledTextField
            label="אימייל לחזרה"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="email"
          />
          <StyledTextField
            label={!booking ? "הודעה" : "סיבת הפניה"}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            onChange={handleChange}
            name="report"
          />
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
          >
            צור קשר
          </StyledButton>
        </Form>
      </RtlProvider>
    </Container>
  );
};

const Container = styled(Box)({
  padding: "20px",
  width: "70%",
});

const ContactContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "20px",
});
const ContactContainerWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const IconWrapper = styled("a")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  marginRight: "10px",
  borderRadius: "50%",
  backgroundColor: "#f2f2f2",
  color: "#000",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#fff",
    color: "#25d366",
  },
});
const IconWrapperNoHover = styled("a")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  marginRight: "10px",
  borderRadius: "50%",
  backgroundColor: "#f2f2f2",
  color: "#000",
});

const TextWrapper = styled(Typography)({
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  margin: 0,
});

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "20px",
  backgroundColor: theme.palette.primary.light,
}));

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
});

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
export default ContactForm;
