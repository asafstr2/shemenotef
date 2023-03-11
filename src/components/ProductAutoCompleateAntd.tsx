import React, { useEffect, useState } from "react";
import useDebounce from "hooks/useDebounce";
import { BASEURL } from "util/const";
import { extractToken } from "util/functions";
import { AutoComplete } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import { translate } from "util/translate";
import { language, Language } from "util/const";
import { Products } from "app/types/core";
import styled from "styled-components";

interface Props {
  className?: string;
  options: Products[];
  setOptions: React.Dispatch<React.SetStateAction<Products[]>>;
  refetch?: () => void;
  lang: Language;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  margin-inline-end: 50px;

  @media screen and (max-width: 768px) {
    margin-inline-end: 0;
    margin-right: 10px;
  }
`;

const SearchInput = styled(AutoComplete)`
  width: 200px;
  transition: width 0.2s ease;
  &:focus-within {
    width: 500px;
  }
  @media screen and (max-width: 768px) {
    width: 20px;

    & input {
      font-size: 12px;
    }
    &:focus-within {
      width: 200px;
    }
  }
`;

export default function Search({
  className,
  options,
  setOptions,
  refetch,
  lang,
}: Props) {
  const { Option } = AutoComplete;
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const handleChange = (productName: string) => {
    setOptions &&
      setOptions(
        options?.filter((product) => product.title === productName) ?? []
      );
  };
  useEffect(() => {
    if (debouncedSearchTerm || searchTerm.length === 0) {
      searchCharacters(debouncedSearchTerm).then((results) => {
        if (results) {
          setOptions && setOptions(results);
        } else {
          setOptions && setOptions([]);
        }
      });
    } else {
      setOptions && setOptions([]);
    }
  }, [debouncedSearchTerm, searchTerm.length, setOptions]);

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
    <Container className={className}>
      <SearchIcon />
      <SearchInput
        value={searchTerm}
        onSelect={(value) => handleChange(value as string)}
        onSearch={(searchText) => setSearchTerm(searchText)}
        onChange={(searchText) => setSearchTerm(searchText as string)}
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
      </SearchInput>
    </Container>
  );
}
