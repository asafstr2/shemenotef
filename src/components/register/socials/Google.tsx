import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import styled from "styled-components";
import { fetchingUserFromGoogle } from "util/functions";
import { ReactComponent as GoogleIcon } from "icons/GoogleIconColor.svg";


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
const SocialMediaButton = styled.div`
  cursor: pointer;
`;
export default function Google({
  state,
  extended,
  authType,
  handleSubmit,
  noText,
}: Props) {
  let responseGoogle = async (res: any) => {
    const fetchedUser = await fetchingUserFromGoogle(res.access_token);
    console.log({ fetchedUser });
    await auth({
      ...state,
      password: "",
      social: true,
      email: fetchedUser.email,
      googleId: fetchedUser.sub,
      username: `${fetchedUser.given_name} ${fetchedUser.family_name}`,
      profileImageUrl: fetchedUser.picture,
    });
  };

  let auth = async (form: any) => {
    try {
      handleSubmit(form, authType === "signup" ? authType : "socialsignin");
    } catch (error) {
      console.log(error);
    }
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => responseGoogle(tokenResponse),
  });

  return (
    <SocialMediaButton onClick={() => login()}>
      <GoogleIcon />
    </SocialMediaButton>
  );
}
