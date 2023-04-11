/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { translate } from "util/translate";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAddCategoryMutation } from "app/services/categoriesApi";
import { useGetUploadAssetsUrlQuery } from "app/services/productsApi";
import DragNdrop from "components/utils/DragNDrop";
import { uploadFiles } from "util/functions";
import LoaderButton from "components/buttons/LoaderButton";
function AddCategory() {
  const [updateProuduct, { isLoading }] = useAddCategoryMutation();
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
    setIsUploading(false);
    updateProuduct({ ...form, images: results, image: results[0].secure_url });
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

export default AddCategory;

const fields = {
  title: "test3",
  description: "some thing",
  images: [],
};
