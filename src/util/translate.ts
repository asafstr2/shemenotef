import { store } from "app/store";
import { language, languageForLC } from "util/const";

export const translate = (string: string) => {
  const lang = store.getState().lang;
  // @ts-ignore
  const stringToReturn: string = lang.langConst[lang.lang][string];
  //to do replace  "no string found" with string
  const defaultString: string =
    // @ts-ignore
    lang.langConst[language.english][string] ?? "no string found";
  if (stringToReturn) return stringToReturn;
  return defaultString;
};

export const languageLcSet = (lang: string) => {
  localStorage.setItem(languageForLC, JSON.stringify(lang));
};
export const languageLcGet = () => {
  JSON.parse(localStorage.getItem(languageForLC) ?? "");
};
