import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "app/services/authService";
import { setCurrentUser } from "app/slices/userSlice";
import Socials from "components/register/socials";

import Loader from "components/utils/Loader";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "./SignUpForm";
import { translate } from "util/translate";
import { saveMeLcSet } from "util/functions";
import { FormType, AuthType } from "./types";
import { Divider } from "antd";
import styled from "styled-components";

const RootContainer = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    min-width: 450px;
    max-width: 600px;
  }
`;
const Header = styled(DialogTitle)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Account = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 10px;
  cursor: default;
`;

function SignupInner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initVal = {
    email: "",
    password: "",
    username: "",
    facebookId: "",
    googleId: "",
    profileImageUrl: "",
    resetEmail: "",
    showPassword: false,
  };
  const [signup, { isLoading }] = useSignupMutation();
  const [authType, setAuthType] = useState<AuthType>("signin");
  const [remember, setRemember] = useState(false);
  let location = useLocation();
  const { goto } = location?.state.modalLocation;
  const handleSubmit = async (form: FormType, authtype: AuthType) => {
    delete form.remember;
    saveMeLcSet(remember);
    try {
      const { token } = await signup({
        user: form,
        authType: authtype,
      }).unwrap();
      dispatch(setCurrentUser(token));
      navigate(goto || -1);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loader />;
  const signLabel =
    authType === "signup" ? translate("Signup") : translate("Signin");
  return (
    <RootContainer>
      <Header>{signLabel}</Header>

      <Form
        authType={authType}
        initVal={initVal}
        handleSubmit={handleSubmit}
        setRemember={setRemember}
      />
      <Divider>{translate("Or")}</Divider>
      <Socials
        authType={authType}
        initVal={initVal}
        handleSubmit={handleSubmit}
      />
      <Account>
        {` ${
          authType === "signup"
            ? translate("have an account?")
            : translate("dont have an account?")
        }`}
        <div
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            setAuthType((prev) => (prev === "signup" ? "signin" : "signup"));
          }}
        >
          {authType === "signin" ? translate("Signup") : translate("Signin")}
        </div>
      </Account>
    </RootContainer>
  );
}

export default SignupInner;
