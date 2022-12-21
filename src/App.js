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

let loginlocalstore = localStorage.getItem("islogin") === "true";

let islogin = localStorage.getItem("islogin") === "true";

function App() {
  const navi = useNavigate();
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (islogin) {
      navi("/main/inboxlist");
      console.log(" navi");
    } else {
      navi("/login");
    }
  }, [islogin]);

  const sentItem = useSelector((state) => state.mymail.sentItem);
  useEffect(() => {
    if (sentItem.length > 0) {
      Dispatch(UpdateMySentItem(sentItem));
    }

    console.log(sentItem);
  }, [sentItem]);
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
        {loginlocalstore && (
          <Route
            path="/login"
            element={<Navigate replace to="/main/inboxlist" />}
          />
        )}
        {/* <TextEditing></TextEditing> */}
      </Routes>
    </div>
  );
}

export default App;
