import { createSlice } from "@reduxjs/toolkit";
import { langConst, language, languageForLC } from "util/const";
import { languageLcSet } from "util/translate";

const initialState = {
  lang:
    (localStorage[languageForLC] && JSON.parse(localStorage[languageForLC])) ||
    language.english,
  langConst,
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage(state, action) {
      const success = {
        ...state,
        lang: action.payload,
      };
      languageLcSet(action.payload);
      return success;
    },
  },
});

export const { setLanguage } = langSlice.actions;

export default langSlice.reducer;
