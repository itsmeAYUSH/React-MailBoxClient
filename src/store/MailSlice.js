import { createSlice } from "@reduxjs/toolkit";
const initialval = { sendMail: false, getMail: false, items: [] };

const MailSlice = createSlice({
  name: "mail",
  initialState: initialval,
  reducers: {
    setSentData(state, action) {
      state.sendMail = !state.sendMail;
      console.log("success");
    },
    setGetMail(state, action) {
        console.log("getmail");
      },
      updateItem(state, action) {
        state.items = action.payload;
      },
  },
});
export const MailSliceAction = MailSlice.actions;
export default MailSlice;
