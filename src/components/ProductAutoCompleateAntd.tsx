import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { BASEURL, Language } from "util/const";
import { Products } from "app/types/core";
import _ from "lodash";
import { alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  className?: string;
  options: Products[];
  setOptions: React.Dispatch<React.SetStateAction<Products[]>>;
  refetch?: () => void;
  lang: Language;
}

const AutocompleteComponent = ({ options, setOptions, refetch }: Props) => {
  const handleInputChange = _.debounce(async (value: string) => {
    if (value.length > 0) {
      const url = `${BASEURL}/products/autocomplete?search=${value}`;
      const response = await axios.get(url);
      setOptions(response.data);
    } else {
      refetch?.();
      setOptions([]);
    }
  }, 500);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.value);
  };
  console.log(options);

  return (
    <Autocomplete
      // freeSolo
      sx={{ marginInlineEnd: "10%", InlineStart: "30px" }}
      fullWidth
      options={options}
      getOptionLabel={(option?: any) => option.title ?? ""}
      renderInput={(params: any) => (
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledTextField
            {...params}
            placeholder="Search…"
            onChange={handleSearchChange}
          />
        </Search>
      )}
    />
  );
};

export default AutocompleteComponent;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginInlineStart: theme.spacing(2),
  marginInlineEnd: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginInlineStart: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 4),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-root": {
    paddingInlineStart: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
  },
  "& .MuiAutocomplete-input": {
    marginInlineStart: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
  },
}));
