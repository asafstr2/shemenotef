import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { translate } from "util/translate";
import { Data } from "./types";
interface Props {
  step?: number;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  data: Data;
}
export default function PaymentForm({ setData, step, data }: Props) {
  const handleChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      payment: {
        ...prev.payment,
        [e.target.name]:
          e.target.value === "on" ? e.target.checked : e.target.value,
      },
    }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            value={data.payment.cardName}
            required
            id="cardName"
            name="cardName"
            label={translate("cardName")}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            value={data.payment.cardNumber}
            required
            name="cardNumber"
            id="cardNumber"
            label={translate("cardNumber")}
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            value={data.payment.expDate}
            required
            name="expDate"
            id="expDate"
            label={translate("expDate")}
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            value={data.payment.cvv}
            required
            id="cvv"
            name="cvv"
            label={translate("cvv")}
            helperText={translate("helperTextForCvv")}
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveCard"
                onChange={handleChange}
              />
            }
            label={translate("saveCard")}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
