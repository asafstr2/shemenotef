/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "app/services/authService";
import { setCurrentUser } from "app/slices/userSlice";
import Facebook from "components/register/socials/Facebook";
import Google from "components/register/socials/Google";
import { Box, Button } from "@mui/material";

import Loader from "components/utils/Loader";
import { useNavigate, useLocation } from "react-router-dom";
import { Divider, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { translate } from "util/translate";
import { saveMeLcSet } from "util/functions";
const classes = {
  root: {
    padding: "5%",
    minWidth: "450px",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
  },

  formSection: {},
  header: { display: "flex", width: "100%", justifyContent: "center" },
  forgotPassword: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  socialMediaContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "6%",
  },
};
type FormType = {
  password: string;
  social: boolean;
  email: string;
  googleId?: string;
  facebookId?: string;
  username: string;
  profileImageUrl: string;
  remember?: string;
  resetEmail: string;
  showPassword: boolean;
};
function SignupInner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

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
  const [authType, setAuthType] = useState<
    "signin" | "signup" | "socialsignin"
  >("signin");
  const [remember, setRemember] = useState(false);
  let location = useLocation();
  const { goto } = location?.state.modalLocation;
  const handleSubmit = async (
    form: FormType,
    authtype: "signin" | "signup" | "socialsignin"
  ) => {
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
  const social = (
    <Box //@ts-ignore
      style={classes.socialMediaContainer}
    >
      <Google
        authType={authType}
        state={initVal}
        handleSubmit={handleSubmit}
        noText
        extended={false}
      />
      <Facebook
        authType={authType}
        state={initVal}
        handleSubmit={handleSubmit}
        noText
        extended={false}
      />
    </Box>
  );
  if (isLoading) return <Loader />;

  return (
    <div //@ts-ignore
      style={classes.root}
    >
      <DialogTitle //@ts-ignore
        style={classes.header}
      >
        {authType === "signup" ? translate("Signup") : translate("Signin")}
      </DialogTitle>

      <Form
        form={form}
        name="control-hooks"
        initialValues={initVal}
        onFinish={(vals) => handleSubmit(vals, authType)}
        autoComplete="off"
        //@ts-ignore
        style={classes.formSection}
        layout={"vertical"}
      >
        {authType === "signup" && (
          <Form.Item
            label={translate("Username")}
            name="username"
            rules={[
              {
                required: true,
                message: translate("Please input your username!"),
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={translate("Username")}
            />
          </Form.Item>
        )}
        <Form.Item
          label={translate("Email")}
          name="email"
          rules={[
            {
              required: true,
              message: translate("Please input your email!"),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={translate("Email")}
          />
        </Form.Item>

        <Form.Item
          label={translate("Password")}
          name="password"
          rules={[
            {
              required: true,
              message: translate("Please input your password!"),
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={translate("Password")}
          />
        </Form.Item>
        <div //@ts-ignore
          style={classes.forgotPassword}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onChange={(e) => setRemember(e.target.checked)}>
              {translate("Remember me")}
            </Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            {translate("Forgot password")}{" "}
          </a>
        </div>
        <Form.Item wrapperCol={{ offset: 9, span: 26 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            {` ${
              authType === "signup" ? translate("Signup") : translate("Signin")
            }`}
          </Button>
        </Form.Item>
      </Form>

      <Divider>{translate("Or")}</Divider>
      {social}
      <div //@ts-ignore
        style={classes.account}
      >
        {` ${
          authType === "signup"
            ? translate("have an account?")
            : translate("dont have an account?")
        }`}
        <a
          className="login-form-forgot"
          href=""
          onClick={(e) => {
            e.preventDefault();
            setAuthType((prev) => (prev === "signup" ? "signin" : "signup"));
          }}
        >
          {` ${
            authType === "signup" ? translate("Signin") : translate("Signup")
          }`}
        </a>
      </div>
    </div>
  );
}

export default SignupInner;
