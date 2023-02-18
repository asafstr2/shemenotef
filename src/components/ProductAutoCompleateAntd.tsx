import React, { useEffect, useState } from "react";
import useDebounce from "hooks/useDebounce";
import { BASEURL } from "util/const";
import { extractToken } from "util/functions";
import { AutoComplete } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import { translate } from "util/translate";
import { language, Language } from "util/const";
import "./css.css";
import { Products } from "app/types/core";

interface Props {
  className?: string;
  options: Products[];
  setOptions: React.Dispatch<React.SetStateAction<Products[]>>;
  refetch?: () => void;
  lang: Language;
}
export default function Search({
  className,
  options,
  setOptions,
  refetch,
  lang,
}: Props) {
  // const [options, setOptions] = React.useState([]);
  const { Option } = AutoComplete;
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const handleChange = (productName: string) => {
    setOptions &&
      setOptions(
        options?.filter((product) => product.title === productName) ?? []
      );
  };
  useEffect(
    () => {
      if (debouncedSearchTerm || searchTerm.length === 0) {
        searchCharacters(debouncedSearchTerm).then((results) => {
          console.log({ search: results });
          if (results) {
            setOptions && setOptions(results);
          } else {
            setOptions && setOptions([]);
          }
        });
      } else {
        setOptions && setOptions([]);
      }
    },
    [debouncedSearchTerm, searchTerm.length, setOptions] // Only call effect if debounced search term changes
  );

  // API search function
  function searchCharacters(search: string) {
    const URL =
      search.length > 0
        ? `${BASEURL}/products/autocomplete?search=${search}`
        : `${BASEURL}/products`;
    return fetch(URL, {
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
    <div
      style={{
        display: "flex",
        marginRight: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={className}
    >
      <SearchIcon />
      <AutoComplete
        style={{ width: "100%" }}
        value={searchTerm}
        onSelect={(value) => handleChange(value)}
        onSearch={(searchText) => setSearchTerm(searchText)}
        onChange={(searchText) => setSearchTerm(searchText)}
        filterOption
        placeholder={translate("Search")}
        notFoundContent="no results"
      >
        {options?.map((product) => (
          <Option
            key={product._id}
            value={
              lang === language.hebrew
                ? product.otherLanguageTitle.hebrew
                : product.title
            }
          >
            {lang === language.hebrew
              ? product.otherLanguageTitle.hebrew
              : product.title}
          </Option>
        ))}
      </AutoComplete>
    </div>
  );
}
