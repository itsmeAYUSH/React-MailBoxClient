import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import MailSlice from "./MailSlice";
import Uislice from "./Uivisible";
import MymailSlice from "./MymailSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    uiauth: Uislice.reducer,
    mail: MailSlice.reducer,
    mymail:MymailSlice.reducer,
  },
});
export default Store;
