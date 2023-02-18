import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import useDebounce from "hooks/useDebounce";
import { BASEURL } from "util/const";
import { extractToken } from "util/functions";
import SearchIcon from "@mui/icons-material/Search";

import { translate } from "util/translate";

interface Props {
  className: string;
}
export default function Search({ className }: Props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const handleChange = (productName: { title: string | null } | null) => {
    //get all product from redux store
    //filter the products to the matching ones using option
    console.log(productName);
  };
  React.useEffect(
    () => {
      if (debouncedSearchTerm) {
        setLoading(true);
        searchCharacters(debouncedSearchTerm).then((results) => {
          if (results) {
            setLoading(false);
            setOptions(results);
          } else {
            setOptions([]);
            setLoading(false);
          }
        });
      } else {
        setOptions([]);
        setLoading(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  // API search function
  function searchCharacters(search: string) {
    return fetch(`${BASEURL}/products/autocomplete?search=${search}`, {
      method: "GET",
      //@ts-ignore
      authorization: `Bearer ${extractToken()}`,
    })
      .then((r) => r.json())
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  return (
    <Autocomplete
      sx={{ borderBottom: "none" }}
      id="search"
      className={className}
      autoComplete
      autoHighlight
      open={open}
      onChange={(e, value) => {
        handleChange(value);
      }}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(
        option: { title: string },
        value: { title: string }
      ) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          sx={{ borderBottom: "none" }}
          variant="standard"
          className={className}
          onChange={(e) => setSearchTerm(e.target.value)}
          {...params}
          aria-label="search"
          placeholder={translate("Search")}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <SearchIcon />
                )}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
