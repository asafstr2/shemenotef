import React, { useState } from "react";
import styled from "styled-components";
import { Button, Avatar, Popover } from "antd";
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
import Cart from "routes/cart/Cart";
import Search from "components/ProductAutoCompleateAntd";
import { Language } from "util/const";
import { Products } from "app/types/core";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Logo = styled.div`
  margin: 0;
  width: 38px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  margin-inline-end: 10px;
  cursor: pointer;
`;
const StyledLoginAvatar = styled(AvatarLogin)`
  margin-inline-end: 10px;
  cursor: pointer;
`;

const CartPopoverContent = styled.div`
  width: 500px;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
interface Props {
  className?: string;
  options: Products[];
  setOptions: React.Dispatch<React.SetStateAction<Products[]>>;
  refetch?: () => void;
  lang: Language;
}
const Header = (props: Props) => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector(getTotals);
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartVisibleChange = (visible: boolean) => {
    setCartVisible(visible);
  };

  const cartPopoverContent = (
    <CartPopoverContent>
      <Cart handleCartVisibleChange={handleCartVisibleChange} />
    </CartPopoverContent>
  );

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NavLink to="/">
          <Logo>
            <img
              alt="Shemen otef"
              src="https://static1.s123-cdn-static-a.com/uploads/7229067/400_642b1b8106cce.png"
            ></img>
          </Logo>
        </NavLink>
        {/* <Search {...props} /> */}
        <HeaderRight>
          {/* <LanguageButton /> */}

          <StyledLoginAvatar />
          <Popover
            content={cartPopoverContent}
            trigger="click"
            open={cartVisible}
            onOpenChange={handleCartVisibleChange}
            placement="bottomRight"
          >
            <Badge badgeContent={cartTotalQuantity} color="info">
              <StyledAvatar size="large" icon={<ShoppingCartOutlined />} />
            </Badge>
          </Popover>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
