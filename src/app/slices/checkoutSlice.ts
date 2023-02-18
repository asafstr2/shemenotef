import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipping: {},
  paymentDetails: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    nextPage(state, action) {
      switch (action.payload.step) {
        case 0:
          return {
            ...state,
            shipping: action.payload.data,
          };
        case 1:
          return {
            ...state,
            paymentDetails: action.payload.data,
          };
        default:
          break;
      }
    },
  },
});

export const { nextPage } = checkoutSlice.actions;

export default checkoutSlice.reducer;
