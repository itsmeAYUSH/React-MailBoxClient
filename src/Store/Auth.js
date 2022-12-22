import { createSlice } from "@reduxjs/toolkit";

const initialAuth = { islogin: false };

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    Login(state, action) {
      // console.log(action.payload);
      state.islogin = !state.islogin;
      // console.log("login");
    },
  },
});
export const AuthsliceAction = AuthSlice.actions;
export default AuthSlice;
