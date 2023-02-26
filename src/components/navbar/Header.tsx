import React from "react";
import styled from "styled-components";
import { Button, Avatar } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "app/slices/cartSlice";
import Badge from "@mui/material/Badge";
import NavLink from "components/utils/Link";
import { RootState } from "app/store";
import AvatarLogin from "./AvatarLogin";
import LanguageButton from "components/buttons/langbuttonNoText";
import { translate } from "util/translate";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  margin-inline-end: 10px;
  cursor: pointer;
`;
const StyledLoginAvatar = styled(AvatarLogin)`
  margin-inline-end: 10px;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  margin-inline-end: 10px;
`;

const Header = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector(getTotals);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NavLink to="/">
          <Logo>{translate("shemenOtef")}</Logo>
        </NavLink>
        <HeaderRight>
          <LanguageButton />

          <StyledLoginAvatar />
          <NavLink to="/cart">
            <Badge badgeContent={cartTotalQuantity} color="info">
              <StyledAvatar size="large" icon={<ShoppingCartOutlined />} />
            </Badge>
          </NavLink>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
