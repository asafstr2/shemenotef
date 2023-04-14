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
import Review from "./Review";
import { translate } from "util/translate";
import { Data } from "./types";
import { usePayMutation } from "app/services/paymant";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { getTotals } from "app/slices/cartSlice";
import LoaderButton from "components/buttons/LoaderButton";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright Shemen otef© "}
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
  data: Data,
  setAllFieldsFilled: React.Dispatch<React.SetStateAction<boolean>>
) {
  switch (step) {
    case 0:
      return (
        <AddressForm
          step={step}
          setData={setData}
          data={data}
          setAllFieldsFilled={setAllFieldsFilled}
        />
      );

    case 1:
      return <Review data={data} />;
    default:
      throw new Error(translate("unknownStep"));
  }
}

export default function Checkout() {
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const [pay, { isLoading }] = usePayMutation();
  let cart = useSelector((state: RootState) => state.cart);
  const { cartTotalQuantity, cartTotalAmount } = useSelector(getTotals);
  cart = { ...cart, cartTotalQuantity, cartTotalAmount };
  const steps = [
    translate("ShippingAddress"),
    // translate("PaymentDetails"),
    translate("ReviewYourOrder"),
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState<Data>({
    shipping: {},
    payment: {},
  });

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      const { shipping } = data;
      const dataToSend = {
        ClientName: shipping.firstName,
        ClientLName: shipping.lastName,
        street: shipping.address2,
        city: shipping.city,
        zip: shipping.zip,
        phone: shipping.phone,
        cell: shipping.phone,
        email: shipping.email,
        products: Object.fromEntries(
          cart.cartItems.map(({ _id, cartQuantity: quantity }) => [
            _id,
            quantity,
          ])
        ),
        couponCodes: cart.couponCodes,
      };
      const url = (await pay(dataToSend).unwrap()) as { paymantUrl: string };
      return (window.location.href = url.paymantUrl);
    } else {
      if (allFieldsFilled) {
        return setActiveStep(activeStep + 1);
      }
      return alert(translate("Please fill all fields"));
    }
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
            {steps.map((label, i) => (
              <Step key={label + i}>
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
                {getStepContent(activeStep, setData, data, setAllFieldsFilled)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ mt: 15, ml: 1 }}
                      disabled={isLoading}
                    >
                      {translate("Back")}
                    </Button>
                  )}

                  {activeStep !== steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 15, ml: 6 }}
                    >
                      {translate("next")}
                    </Button>
                  ) : (
                    <LoaderButton
                      sx={{ mt: 15, ml: 6 }}
                      handleSubmit={handleNext}
                      buttonText={translate("placeOrder")}
                      variant="contained"
                      loading={isLoading}
                    />
                  )}
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
