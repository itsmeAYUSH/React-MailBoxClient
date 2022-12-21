import { createSlice } from "@reduxjs/toolkit";

const initialAuth = { islogin: true, signup: false, forgetPassowrd: false };

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    Login(state, action) {
      console.log(action.payload);
      console.log("login");
    },
  },
});
export const AuthsliceAction = AuthSlice.actions;
export default AuthSlice;