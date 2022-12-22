import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import Uislice from "./Uivisible";
import MailSlice from "./MailSlice";
import MymailSlice from "./MymailSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    uiauth: Uislice.reducer,
    mail: MailSlice.reducer,
    mymail: MymailSlice.reducer,
  },
});
export default Store;
