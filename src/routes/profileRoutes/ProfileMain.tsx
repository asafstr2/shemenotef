import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "components/profile/Profile";

function ProfileRoutes() {
  return (
    <Routes>
      <Route path="profile" element={<Profile />}>
        <Route path="main" element={<h1>test</h1>} />
        <Route path="*" element={<h1>not found </h1>} />
      </Route>
    </Routes>
  );
}

export default ProfileRoutes;
