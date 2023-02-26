import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "components/profile/Profile";
import ProfileMain from "components/profile/ProfileFirstSection";

function ProfileRoutes() {
  return (
    <Routes>
      <Route path="profile" element={<Profile />}>
        <Route path="main" element={<ProfileMain />} />
        <Route path="*" element={<h1>not found </h1>} />
      </Route>
    </Routes>
  );
}

export default ProfileRoutes;
