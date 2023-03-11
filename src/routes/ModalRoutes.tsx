import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Modal from "components/utils/Modal";
import SignupInner from "components/register/SignupInner";
import ProductPage from "components/product/ProductPage";

function MoadlRoutes() {
  let location = useLocation();
  let modalLocation = location?.state?.modalLocation;

  return (
    <div>
      {/* to open need two props at least       
      on link element 
      can be imported from
      import NavLink from 'components/Link'
      to={"/modal/signin"} || to={"/modal/signup"} 
      state={{ modalLocation: location }} */}
      {modalLocation && (
        <Routes>
          <Route path="modal" element={<Modal />}>
            <Route path="signup" element={<SignupInner />} />
            <Route path="product/:productid" element={<ProductPage />} />
            <Route path="*" element={<h1> </h1>} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default MoadlRoutes;
