import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { userLcSet, jwtLcSet, jwtLcGet } from "util/functions";
import jwtDecode from "jwt-decode";
const initialState = {
  authentiicate: false,
  currentUser: {
    _id: "",
    birthday: "",
    roles: ["user"],
    notifications: [],
    email: "",
    firstTimeUser: false,
    username: "",
    id: "",
    firstName: "",
    image: "",
    profileImageUrl: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state: any, action: { type: any; payload: any }) {
      const user = jwtDecode(action.payload) ?? initialState.currentUser;

      const success = {
        ...state,
        authentiicate: true,
        currentUser: user,
      };
      if (!jwtLcGet()) {
        console.log({ welcome: action.payload });
        //@ts-ignore
        toast.success(`welcome back ${user?.username}`);
      }
      jwtLcSet(action.payload);

      return success;
    },
    signup(state: any, action: { type: any; payload: any }) {
      const user = jwtDecode(action.payload) ?? initialState.currentUser;
      const success = {
        ...state,
        authentiicate: true,
        currentUser: { ...user, firstTimeUser: true },
      };
      if (!jwtLcGet()) {
        //@ts-ignore
        toast.success(`welcome ${user?.username}`);
      }
      jwtLcSet(action.payload);

      return success;
    },
    logout(state: any, action: { type: any; payload: any }) {
      userLcSet("");
      jwtLcSet("");
      return initialState;
    },
  },
});

export const { logout, setCurrentUser, signup } = userSlice.actions;

export default userSlice.reducer;
