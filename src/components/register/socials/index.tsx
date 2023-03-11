import React from "react";
import Facebook from "components/register/socials/Facebook";
import Google from "components/register/socials/Google";
import styled from "styled-components";
import { Box } from "@mui/material";
import { FormType, InitVal, AuthType } from "../types";

interface Props {
  authType: AuthType;
  initVal: InitVal;
  handleSubmit: (form: FormType, authtype: AuthType) => void;
}

const SocialMediaContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 6%;
`;

function Index({ authType, initVal, handleSubmit }: Props) {
  return (
    <SocialMediaContainer>
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
    </SocialMediaContainer>
  );
}

export default Index;
