import { createSlice } from "@reduxjs/toolkit";
const initialval = { sendMail: false, getMail: false, items: [], count: 0 };

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
    addItem(state, action) {
      state.items = action.payload;
    },
    updataItems(state, action) {
        const newItem = action.payload;
        const exisitingItem = state.items.find((item) => item.id === newItem.id);
        if (!exisitingItem.readreceipt) {
          exisitingItem.readreceipt = true;
          state.count = state.count + 1;
        }
      },
    },
  });
  export const MailSliceAction = MailSlice.actions;
  export default MailSlice;