import React from "react";
import Main from "routes/main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { language } from "util/const";
import { RootState } from "app/store";

function App() {
  const lang = useSelector((state: RootState) => state.lang.lang);
  return (
    <div dir={lang === language.hebrew ? "rtl" : "ltr"}>
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
