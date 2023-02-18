import React from "react";
import { logout } from "app/slices/userSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();

  return (
    <div>
      <p>user name pic and stats </p>
      <p>
        outelet of profile to include last purchases cart info matched products{" "}
      </p>
      a<button onClick={() => dispatch(logout({}))}>log out</button>
      <Outlet />
    </div>
  );
}

export default Profile;
