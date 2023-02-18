import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
export default function AddressForm({ step, setData, data }: Props) {
  const handleChange = (e: any) => {
    setData((prev: Data) => ({
      ...prev,
      shipping: {
        ...prev.shipping,
        [e.target.name]:
          e.target.value === "on" ? e.target.checked : e.target.value,
      },
    }));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {translate("ShippingAddress")}{" "}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={data.shipping.firstName}
            required
            id="firstName"
            name="firstName"
            label={translate("firstName")}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={data.shipping.lastName}
            required
            id="lastName"
            name="lastName"
            label={translate("lastName")}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={data.shipping.address1}
            required
            id="address1"
            name="address1"
            label={translate("address1")}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={data.shipping.address2}
            id="address2"
            name="address2"
            label={translate("address2")}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={data.shipping.city}
            required
            id="city"
            name="city"
            label={translate("city")}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={data.shipping.state}
            id="state"
            name="state"
            label={translate("state")}
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={data.shipping.zip}
            required
            id="zip"
            name="zip"
            label={translate("zip")}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={data.shipping.country}
            required
            id="country"
            name="country"
            label={translate("country")}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                onChange={handleChange}
              />
            }
            label={translate("saveAddress")}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
