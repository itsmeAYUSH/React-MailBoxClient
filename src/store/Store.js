import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import Uislice from "./Uivisible";

const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    uiauth: Uislice.reducer,
  },
});
export default Store;