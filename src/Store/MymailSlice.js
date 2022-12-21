import { createSlice } from "@reduxjs/toolkit";

const initialmystate = {
  sentItem: [],
  messageView: {},
  sendcount: 0,
};

const MymailSlice = createSlice({
  name: "mymail",
  initialState: initialmystate,
  reducers: {
    AddSenditemList(state, action) {
      const newItem = action.payload;
      state.sentItem = action.payload;
    },
    addMessageViewinfo(state, action) {
      state.messageView = action.payload;
    },
    updateSendItem(state, action) {
      state.sentItem = action.payload;
      console.log(action.payload);
      state.sendcount++;
    },
  },
});
export const MymailSliceAction = MymailSlice.actions;
export default MymailSlice;
