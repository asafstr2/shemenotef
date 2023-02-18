import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi, productsApiAdmin } from "app/services/productsApi";
import { authApi } from "app/services/authService";
import { rtkQueryErrorOrSuccessLogger } from "app/services/errorOrSuccessMiddleware";
import cartReducer, { getTotals } from "app/slices/cartSlice";
import checkoutSlice, { nextPage } from "app/slices/checkoutSlice";
import userSlice from "app/slices/userSlice";
import language from "app/slices/langSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [productsApiAdmin.reducerPath]: productsApiAdmin.reducer,
    [authApi.reducerPath]: authApi.reducer,
    cart: cartReducer,
    checkout: checkoutSlice,
    user: userSlice,
    lang: language,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rtkQueryErrorOrSuccessLogger,
      productsApi.middleware,
      productsApiAdmin.middleware,
      authApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
