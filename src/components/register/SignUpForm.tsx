import React from "react";
import { Form, Input, Checkbox } from "antd";
import { translate } from "util/translate";
import { InitVal, FormType, AuthType } from "./types";
import { Box, Button } from "@mui/material";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";

const FormSection = styled(Form)`
  width: 100%;
`;

const ForgotPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const SignUpFormContainer = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

interface Props {
  authType: AuthType;
  initVal: InitVal;
  handleSubmit: (form: FormType, authtype: AuthType) => void;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignUpForm({ initVal, authType, handleSubmit, setRemember }: Props) {
  const signLabel =
    authType === "signup" ? translate("Signup") : translate("Signin");
  const [form] = Form.useForm();

  return (
    <SignUpFormContainer>
      <FormSection
        form={form}
        name="control-hooks"
        initialValues={initVal}
        onFinish={(vals: any) => handleSubmit(vals, authType)}
        autoComplete="off"
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
        <ForgotPassword>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onChange={(e) => setRemember(e.target.checked)}>
              {translate("Remember me")}
            </Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            {translate("Forgot password")}{" "}
          </a>
        </ForgotPassword>
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          {` ${signLabel}`}
        </SubmitButton>
      </FormSection>
    </SignUpFormContainer>
  );
}

export default SignUpForm;
