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
import { useGetAllcategoriesQuery } from "app/services/categoriesApi";
import DragNdrop from "components/utils/DragNDrop";
import { uploadFiles } from "util/functions";
import LoaderButton from "components/buttons/LoaderButton";
import { Category } from "app/types/core";
import Select from "@mui/material/Select";
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

  const { data: categories, isLoading: categoriesLoading } =
    useGetAllcategoriesQuery({}) as {
      data: Category[];
      isLoading: boolean;
      refetch: () => void;
    };
  const categoriesNames = categories?.map((category) => ({
    id: category._id,
    title: category.title,
  }));
  const handleSubmit = async () => {
    setIsUploading(true);
    //@ts-ignore
    const results = await uploadFiles(uploadObject, files);
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
    console.log({ event });
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleCheckboxChange = (event: any) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.checked }));
  };
  isLoading || (categoriesLoading && <h1>lodaing</h1>);
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
            if (typeof form[key] === "string" && key !== "categoryid")
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
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              name={JSON.stringify({ field: "quantity", val: "value" })}
              value={form.quantity.value}
              onChange={handleObbjectChange}
              required
              id={"quantity.value"}
              label={translate("value")}
              defaultValue={form.quantity.value}
            />
            <TextField
              id="quantity.currency"
              name={JSON.stringify({ field: "quantity", val: "currency" })}
              select
              label={translate("quantityCurrency")}
              value={form.quantity.currency}
              onChange={handleObbjectChange}
              helperText="Please select your mesuer"
            >
              {quantityCurrency.map((option) => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              value={form.categoryid}
              onChange={handleChange}
              label="Category"
              name="categoryid"
              select
              sx={{ width: 200 }}
            >
              {categoriesNames?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.title}
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
const quantityCurrency = [
  {
    value: "GRAM",
    label: "g",
  },
  {
    value: "MIL",
    label: "ml",
  },
];

const fields = {
  title: "test3",
  description: "some thing",
  ingredients: "רכיבים",
  images: [],
  quantetyInStock: "2",
  featured: true,
  outOfStock: false,
  listed: true,
  availibleForDelivery: true,
  price: { value: "14", currency: "₪" },
  quantity: { value: "14", currency: "g" },
  categoryid: "",
};
