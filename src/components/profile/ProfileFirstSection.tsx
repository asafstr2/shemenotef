import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import Card from "components/cards/CardForCart";

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const UserInfoWrapper = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  padding: 20px;
`;

const UserInfoHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const UserInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartWrapper = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  padding: 20px;
`;

const CartHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PurchaseWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px;
`;

const PurchaseHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user);
  const currentUser = user.currentUser;
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <UserInfoWrapper>
          <UserInfoHeader>User Information</UserInfoHeader>
          <UserInfoItem>
            <div>Name:</div>
            <div>
              {currentUser.firstName} {currentUser.username}
            </div>
          </UserInfoItem>
          <UserInfoItem>
            <div>Email:</div>
            <div>{currentUser.email}</div>
          </UserInfoItem>
        </UserInfoWrapper>
        <CartWrapper>
          <CartHeader>Cart</CartHeader>
          {cart.cartItems.length === 0 ? (
            <div>No items in cart</div>
          ) : (
            cart.cartItems.map((item) => <Card {...item} key={item._id} />)
          )}
        </CartWrapper>
      </ProfileWrapper>
      <PurchaseWrapper>
        <PurchaseHeader>Past Purchases</PurchaseHeader>
        <div>No past purchases</div>
      </PurchaseWrapper>
    </ProfileContainer>
  );
};

export default ProfilePage;
