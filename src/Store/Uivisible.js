import { createSlice } from "@reduxjs/toolkit";

const initialAuth = { islogin: true, signup: false, forgetPassowrd: false };

const Uislice = createSlice({
  name: "uiauth",
  initialState: initialAuth,
  reducers: {
    setisLogin(state, action) {
      state.islogin = !state.islogin;
    },
  },
});
export const UisliceAction = Uislice.actions;
export default Uislice;
