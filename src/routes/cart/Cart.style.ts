// CartPopover.style.ts

import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: 16px;
`;

export const CartItemsWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 16px;
`;

export const CartItemWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CartSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  max-width: 85%;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const RootWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  & .MuiButton-containedPrimary {
    background-color: #53c4ac;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export const Subtext = styled.h5`
  color: grey;
  margin-inline-end: 3%;
`;

// export const FlexText = styled.div`
//   color: grey;
//   display: flex;
//   margin: auto;
//   width: 76%;
//   justify-content: space-between;
//   margin-top: 50px;
//   "@media (max-width: 600px)": {
//     margin-top: 3%;
//   },
// `;
export const FlexText = styled("div")({
  color: "grey",
  display: "flex",
  margin: "auto",
  width: "100%",
  justifyContent: "space-between",
  marginTop: "50px",
  "@media (max-width: 600px)": {
    marginTop: "3%",
  },
});

export const FlexAlign = styled.span`
  flex: 1;
  text-align: end;
`;

export const Total = styled.span`
  flex: 1;
  text-align: end;
  font-size: 1.5rem;
`;

export const PopoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ProductImage = styled.img`
  height: 64px;
  width: 64px;
  object-fit: contain;
`;

export const ProductTitle = styled.span`
  margin-left: 16px;
  font-size: 16px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #444444;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #dddddd;
    color: #999999;
  }
`;

export const QuantityText = styled.span`
  margin: 0 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const PriceText = styled.span`
  font-size: 16px;
  margin-right: 8px;
  font-weight: bold;
`;
export const Footer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "50px",
});
