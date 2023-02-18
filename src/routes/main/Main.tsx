import React, { useEffect, useState } from "react";
import Cart from "routes/cart/Cart";
import Profile from "components/profile/Profile";

import Checkout from "routes/checkout/Checkout";
import AddProduct from "routes/admin/AddProduct";
import Homepage from "components/Homepage";
import ProductAutoCompleate from "components/ProductAutoCompleateAntd";
import { Routes, Route, useLocation } from "react-router-dom";
import ModalRoutes from "routes/ModalRoutes";
import PrivateRoute from "routes/PrivateRouteWrapper";
import AdminRoute from "routes/admin/AdminRoute";
import ProfileRoute from "routes/profileRoutes/ProfileMain";
import NavBar from "components/navbar/NavBar";
import { useGetAllProductsQuery } from "app/services/productsApi";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { Products } from "app/types/core";
import { MainWrapper } from "./Main.style";
function Main() {
  let location = useLocation();
  let modalLocation = location?.state?.modalLocation;
  const {
    data,
    isLoading: productLoading,
    refetch,
  } = useGetAllProductsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 36000,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }
  );

  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    console.log({ data, productLoading });
    if (
      // @ts-ignore
      data?.length > 0 &&
      !productLoading &&
      JSON.stringify(products) !== JSON.stringify(data)
    ) {
      setProducts(data as Products[]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, productLoading]);
  const [options, setOptions] = useState<Products[]>([]);

  const lang = useSelector((state: RootState) => state.lang.lang);
  useEffect(() => {
    refetch();
  }, [lang, refetch]);
  return (
    <div>
      <NavBar />
      <MainWrapper>
        <ProfileRoute />
        <ModalRoutes />
        <Routes location={modalLocation || location}>
          <Route
            path="/autocomplete"
            element={
              <ProductAutoCompleate
                options={options}
                setOptions={setOptions}
                lang={lang}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute goto="/checkout">
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/addProduct"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/"
            element={
              <Homepage products={products} productLoading={productLoading} />
            }
          />
        </Routes>
      </MainWrapper>
    </div>
  );
}

export default Main;
