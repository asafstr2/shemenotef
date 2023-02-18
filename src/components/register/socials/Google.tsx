import React from "react";
import GoogleLogin from "@caranmegil/react-google-login";
import { ReactComponent as GoogleIcon } from "icons/GoogleIconColor.svg";

const classes = {
  socialMedia: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};
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
export default function Google({
  state,
  extended,
  authType,
  handleSubmit,
  noText,
}: Props) {
  let responseGoogle = async (res: any) => {
    let { profileObj } = res;
    await auth({
      ...state,
      password: "",
      social: true,
      email: profileObj.email,
      googleId: profileObj.googleId,
      username: `${profileObj.givenName} ${profileObj.familyName}`,
      profileImageUrl: profileObj.imageUrl,
    });
  };

  let auth = async (form: any) => {
    try {
      handleSubmit(form, authType === "signup" ? authType : "socialsignin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GoogleLogin
        render={(renderProps: any) => (
          <div onClick={renderProps.onClick} style={classes.socialMedia}>
            <GoogleIcon />
            {!noText && (
              <span style={{ marginLeft: 6, fontWeight: 600 }}>
                {authType === "signin" ? "Log in" : "Join"} with Google
              </span>
            )}
          </div>
        )}
        clientId={
          process.env.REACT_APP_GOOGLE_LOGIN_ID ||
          "659438913448-e0343um61gtpmpdtp9jhr1hfu1r160he.apps.googleusercontent.com"
        }
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
