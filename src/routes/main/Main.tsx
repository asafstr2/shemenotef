import React, { useEffect, useState } from "react";
import Cart from "routes/cart/Cart";

import Checkout from "routes/checkout/Checkout";
import PostPaymant from "routes/checkout/PostPaymant";
import AddProduct from "routes/admin/AddProduct";
import Homepage from "components/Homepage/Homepage";
import CategoriesMain from "components/categories/Categories";
import Footer from "components/footer/footer";
import Header from "components/navbar/Header";
import ProductAutoCompleate from "components/ProductAutoCompleateAntd";
import { Routes, Route, useLocation } from "react-router-dom";
import ModalRoutes from "routes/ModalRoutes";
import PrivateRoute from "routes/PrivateRouteWrapper";
import AdminRoute from "routes/admin/AdminRoute";
import ProfileRoute from "routes/profileRoutes/ProfileMain";
import { useGetAllProductsQuery } from "app/services/productsApi";
import { useGetAllcategoriesQuery } from "app/services/categoriesApi";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { Category, Products } from "app/types/core";
import { MainWrapper } from "./Main.style";
import ProductPageRedirect from "components/product/ProductPageRedirect";
import AddCategory from "routes/admin/AddCategory";
import BlogPost from "components/blog/BlogPost";
function Main() {
  let location = useLocation();
  let modalLocation = location?.state?.modalLocation;
  const {
    data: categoriesData,
    isLoading: CategoriesLoading,
    refetch: categoriesRefetch,
  } = useGetAllcategoriesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 36000,
      refetchOnReconnect: true,
      refetchOnFocus: false,
    }
  );
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
      refetchOnFocus: false,
    }
  );

  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
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
    categoriesRefetch();
  }, [categoriesRefetch, lang, refetch]);
  return (
    <div>
      <Header options={options} setOptions={setOptions} lang={lang} />
      <MainWrapper>
        <ProfileRoute />
        <ModalRoutes />
        <Routes location={modalLocation || location}>
          <Route
            path="/"
            element={
              <Homepage
                products={(options && options.length && options) || products}
                productLoading={productLoading || CategoriesLoading}
                categories={categoriesData as Category[]}
              />
            }
          />
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
          <Route path="/categories/:categoryid" element={<CategoriesMain />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blogs/:blogid" element={<BlogPost />} />

          <Route
            path="/checkout"
            element={
              <PrivateRoute onLogingGoto="/checkout">
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="/paymantSucess"
            element={
              <PrivateRoute onLogingGoto="/paymantSucess">
                <PostPaymant />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/addProduct/:productId"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/addCategory"
            element={
              <AdminRoute>
                <AddCategory />
              </AdminRoute>
            }
          />
          <Route
            path="/product/:productId/qr"
            element={<ProductPageRedirect />}
          />
        </Routes>
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default Main;
