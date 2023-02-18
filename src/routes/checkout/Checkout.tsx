import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { translate } from "util/translate";
import { Data } from "./types";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        {translate("shemenOtef")}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function getStepContent(
  step: number,
  setData: React.Dispatch<React.SetStateAction<Data>>,
  data: Data
) {
  switch (step) {
    case 0:
      return <AddressForm step={step} setData={setData} data={data} />;
    case 1:
      return <PaymentForm step={step} setData={setData} data={data} />;
    case 2:
      return <Review data={data} />;
    default:
      throw new Error(translate("unknownStep"));
  }
}

export default function Checkout() {
  const steps = [
    translate("ShippingAddress"),
    translate("PaymentDetails"),
    translate("ReviewYourOrder"),
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({ shipping: {}, payment: {} });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            {translate("Checkout")}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  {translate("ThankYouYorYourOrder")}
                </Typography>
                <Typography variant="subtitle1">
                  {translate("subtitle1")}
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, setData, data)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 15, ml: 1 }}>
                      {translate("Back")}
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 15, ml: 6 }}
                  >
                    {activeStep === steps.length - 1
                      ? translate("placeOrder")
                      : translate("next")}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </>
  );
}
