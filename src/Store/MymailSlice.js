import { createSlice } from "@reduxjs/toolkit";

const initialmystate = { myupdateTriggerval: 0, sentItem: [], messageView: {} };

const MymailSlice = createSlice({
  name: "mymail",
  initialState: initialmystate,
  reducers: {
    sendItemUpdateTrigger(state, action) {
      state.myupdateTriggerval = state.myupdateTriggerval + 1;
    },
    AddSenditemList(state, action) {
      const newItem = action.payload;

      state.sentItem.push(newItem);
    },
    addMessageViewinfo(state, action) {
      state.messageView = action.payload;
    },
  },
});
export const MymailSliceAction = MymailSlice.actions;
export default MymailSlice;