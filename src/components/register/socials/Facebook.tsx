import React, { useEffect } from "react";
import { initFacebookSdk } from "./initFacebookSdk";
import { ReactComponent as FacebookIcon } from "icons/FacebookIconcolor.svg";
import Box from "@mui/material/Box";
import axios from "axios";

interface Props {
  state: any;
  extended: boolean;
  authType: "signin" | "signup" | "socialsignin";
  handleSubmit: (
    form: any,
    authType: "signin" | "signup" | "socialsignin"
  ) => void;
  noText: boolean;
}
export default function Facebook({
  state,
  authType,
  handleSubmit,
  noText,
}: Props) {
  let auth = async (form: any) => {
    try {
      handleSubmit(form, authType === "signup" ? authType : "socialsignin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initFacebookSdk();
    // eslint-disable-next-line
  }, []);

  let responseFacebook = async (res: any) => {
    try {
      auth({
        ...state,
        password: "",
        social: true,
        email: res.email,
        facebookId: res.id,
        username: res.name,
        profileImageUrl: res.picture.data.url,
      });
    } catch (error) {}
  };

  let login = async () => {
    // login with facebook then authenticate with the API to get a JWT auth token
    //@ts-ignore
    const { authResponse } = await new Promise(window.FB.login);
    axios
      .post(
        `https://graph.facebook.com/v8.0/me?access_token=${authResponse?.accessToken}`,
        { fields: "name,email,picture" }
      )
      .then((response) => {
        const { data } = response;
        responseFacebook(data);
      });
  };

  return (
    <div>
      <Box
        onClick={login}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <FacebookIcon />
        {!noText && (
          <span style={{ marginLeft: 6, fontWeight: 600 }}>
            {authType === "signin" ? "Log in" : "Join"} with Facebook
          </span>
        )}
      </Box>
    </div>
  );
}
