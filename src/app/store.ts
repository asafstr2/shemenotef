import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi, productsApiAdmin } from "app/services/productsApi";
import { usersApi } from "app/services/userService";
import { authApi } from "app/services/authService";
import { payApi } from "app/services/paymant";
import { rtkQueryErrorOrSuccessLogger } from "app/services/errorOrSuccessMiddleware";
import cartReducer from "app/slices/cartSlice";
import checkoutSlice, { nextPage } from "app/slices/checkoutSlice";
import userSlice from "app/slices/userSlice";
import language from "app/slices/langSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productsApiAdmin.reducerPath]: productsApiAdmin.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [payApi.reducerPath]: payApi.reducer,
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
      authApi.middleware,
      payApi.middleware,
      usersApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
