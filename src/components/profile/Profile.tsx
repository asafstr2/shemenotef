import React from "react";
import { logout } from "app/slices/userSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "app/services/userService";
function Profile() {
  const dispatch = useDispatch();

  return (
    <div>
      <Outlet />
      <button onClick={() => dispatch(logout({}))}>log out</button>
    </div>
  );
}

export default Profile;
