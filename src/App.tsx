import React from "react";
import Main from "routes/main/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { language } from "util/const";
import { RootState } from "app/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const lang = useSelector((state: RootState) => state.lang.lang);
  return (
    <div dir={lang === language.hebrew ? "rtl" : "ltr"}>
      <GoogleOAuthProvider
        clientId={
          process.env.REACT_APP_GOOGLE_LOGIN_ID ||
          "1029728474590-g31as7sp1r8u2n2gsiklb1jmcjq41ac1.apps.googleusercontent.com"
        }
      >
        <Main />
        <ToastContainer />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
