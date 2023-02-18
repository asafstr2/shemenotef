/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { translate } from "util/translate";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  useAddProductMutation,
  useGetUploadAssetsUrlQuery,
} from "app/services/productsApi";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DragNdrop from "components/utils/DragNDrop";
import { uploadFiles } from "util/functions";
import LoaderButton from "components/buttons/LoaderButton";
function AddProduct() {
  const [updateProuduct, { isLoading }] = useAddProductMutation();
  const [form, setForm] = useState(fields);

  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  //getting the signed url from server -will be valid for 1 hour
  //uploadObject={ apikey,timestamp,signature,folder,url}
  const { data: uploadObject, isLoading: uploadUrlLoading } =
    useGetUploadAssetsUrlQuery(
      {},
      {
        refetchOnMountOrArgChange: true,
      }
    );

  const handleSubmit = async () => {
    setIsUploading(true);
    //@ts-ignore
    const results = await uploadFiles(uploadObject, files);
    console.log(results);
    setIsUploading(false);
    updateProuduct({ ...form, images: results, image: results[0].secure_url });
  };

  const handleObbjectChange = (event: any) => {
    let fields = JSON.parse(event.target.name);
    setForm((prev) => ({
      ...prev,
      [fields.field]: {
        //@ts-ignore
        ...prev[fields.field],
        [fields.val]: event.target.value,
      },
    }));
  };
  const handleChange = (event: any) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleCheckboxChange = (event: any) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.checked }));
  };
  isLoading && <h1>lodaing</h1>;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{translate("adding a product to the database")}</h1>
      </div>

      <div
        id="coulmn-wrapper"
        style={{
          display: "flex",
          width: "80%",
          gap: "10%",
          margin: "auto",
        }}
      >
        <div
          id="left-coulmn"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginTop: "30px",
            width: "40%",
          }}
        >
          {Object.keys(form).map((key) => {
            //@ts-ignore
            if (typeof form[key] === "string")
              return (
                <TextField
                  key={key}
                  name={key}
                  //@ts-ignore
                  value={form[key]}
                  onChange={handleChange}
                  required
                  id={key}
                  label={translate(key)}
                  //@ts-ignore
                  defaultValue={form[key]}
                />
              );
          })}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date "
              inputFormat="dd/MM/yyyy"
              value={form.deliveryDate}
              onChange={(val: any) =>
                handleChange({ target: { name: "deliveryDate", value: val } })
              }
              renderInput={(params: any) => (
                <TextField {...params} name="deliveryDate" />
              )}
            />
          </LocalizationProvider>
        </div>
        <div
          id="right-coulmn"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginTop: "30px",
            width: "40%",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              name={JSON.stringify({ field: "dimensions", val: "width" })}
              value={form.dimensions.width}
              onChange={handleObbjectChange}
              required
              id={"width"}
              label={translate("width")}
              defaultValue={form.dimensions.width}
            />
            <TextField
              name={JSON.stringify({ field: "dimensions", val: "height" })}
              value={form.dimensions.height}
              onChange={handleObbjectChange}
              required
              id={"height"}
              label={translate("height")}
              defaultValue={form.dimensions.height}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              name={JSON.stringify({
                field: "otherLanguageTitle",
                val: "hebrew",
              })}
              value={form.otherLanguageTitle.hebrew}
              onChange={handleObbjectChange}
              required
              id={"hebrew"}
              label={translate("heTitle")}
              defaultValue={form.otherLanguageTitle.hebrew}
            />
            <TextField
              name={JSON.stringify({
                field: "otherLanguageTitle",
                val: "russian",
              })}
              value={form.otherLanguageTitle.russian}
              onChange={handleObbjectChange}
              required
              id={"russian"}
              label={translate("ruTitle")}
              defaultValue={form.otherLanguageTitle.russian}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              name={JSON.stringify({
                field: "otherLanguageDescription",
                val: "hebrew",
              })}
              value={form.otherLanguageDescription.hebrew}
              onChange={handleObbjectChange}
              required
              id={"hebrew"}
              label={translate("heDesc")}
              defaultValue={form.otherLanguageDescription.hebrew}
            />
            <TextField
              name={JSON.stringify({
                field: "otherLanguageDescription",
                val: "russian",
              })}
              value={form.otherLanguageDescription.russian}
              onChange={handleObbjectChange}
              required
              id={"russian"}
              label={translate("ruDesc")}
              defaultValue={form.otherLanguageDescription.russian}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              name={JSON.stringify({ field: "price", val: "value" })}
              value={form.price.value}
              onChange={handleObbjectChange}
              required
              id={"value"}
              label={translate("value")}
              defaultValue={form.price.value}
            />
            <TextField
              id="currency"
              name={JSON.stringify({ field: "price", val: "currency" })}
              select
              label={translate("currency")}
              value={form.price.currency}
              onChange={handleObbjectChange}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <FormGroup>
            {Object.keys(form).map((key) => {
              //@ts-ignore
              if (typeof form[key] === "boolean")
                return (
                  <FormControlLabel
                    key={key}
                    name={key}
                    control={
                      <Checkbox
                        required
                        //@ts-ignore
                        checked={form[key]}
                        onChange={handleCheckboxChange}
                        name={key}
                      />
                    }
                    label={translate(key)}
                  />
                );
            })}
          </FormGroup>
          <DragNdrop files={files} setFiles={setFiles} />
          <LoaderButton
            buttonText={translate("submit")}
            loading={uploadUrlLoading || isUploading}
            handleSubmit={handleSubmit}
            variant="contained"
          />
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "NIS",
    label: "₪",
  },
];
const fields = {
  title: "test3",
  description: "some thing",
  quantity: "1",
  images: [],
  quantetyInStock: "2",
  size: "2",
  category: "pics",
  brand: "shemen-otef",
  location: "home",
  discount: "12",
  featured: true,
  outOfStock: false,
  listed: true,
  availibleForDelivery: true,
  otherLanguageDescription: { hebrew: "בדיקה", russian: "בדיקה" },
  otherLanguageTitle: { hebrew: "בדיקה", russian: "בדיקה" },
  dimensions: { width: "12", height: "12" },
  price: { value: "14", currency: "₪" },
  deliveryDate: new Date(),
};
