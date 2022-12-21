import AuthForm from "./Component/AuthForm/AuthForm";
import TextEditing from "./Component/TextEditing/TextEditing";
import InboxPage from "./Component/InboxPage/InboxPage";
import { Route, Routes, Navigate } from "react-router-dom";
import MessageView from "./Component/InboxPage/MessageView";
import InboxList from "./Component/InboxPage/InboxList";
import SentMessage from "./Component/SendMessage/SendMessage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateMySentItem } from "./Store/Mail-thunk";
import { useNavigate } from "react-router-dom";

function App() {
  let loginlocalstore = localStorage.getItem("islogin") === "true";
  // console.log(loginlocalstore);
  const navi = useNavigate();
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (loginlocalstore) {
      navi("/main/inboxlist");
      // console.log(" navi");
    } else {
      navi("/login");
    }
  }, [islogin]);

  // const sentItem = useSelector((state) => state.mymail.sentItem);
  const sentItem = useSelector((state) => state.mymail.sentItem);
  const sendcount = useSelector((state) => state.mymail.sendcount);
  useEffect(() => {
    if (sentItem.length > 0) {
      Dispatch(UpdateMySentItem(sentItem));
    }

    console.log(sentItem);
  }, [sendcount]);
  console.log("app", sentItem);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthForm />}></Route>
        <Route path="/main/*" element={<InboxPage />}>
          <Route path="inboxlist" element={<InboxList />} />
          <Route path="text-edit" element={<TextEditing />} />
          <Route path="sentmessage" element={<SentMessage />} />
        </Route>
        {!loginlocalstore && (
          <Route element={<Navigate replace to="/login" />} />
        )}
        {/* <TextEditing></TextEditing> */}
      </Routes>
    </div>
  );
}

export default App;
