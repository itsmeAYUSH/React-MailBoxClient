import AuthForm from "./Component/AuthForm/AuthForm";
import TextEditing from "./Component/TextEditing/TextEditing";
import InboxPage from "./Component/InboxPage/InboxPage";
import { Route, Routes, Navigate } from "react-router-dom";
import MessageView from "./Component/InboxPage/MessageView";
import InboxList from "./Component/InboxPage/InboxList";

let islogin = localStorage.getItem("islogin") === "true";

function App() {
  // return <AuthForm />;
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthForm />}></Route>
        <Route path="/main/*" element={<InboxPage />}>
          <Route path="inboxlist" element={<InboxList />} />
          <Route path="text-edit" element={<TextEditing />} />
        </Route>
        {islogin && (
          <Route path="/login" element={<Navigate replace to="main" />} />
        )}
        {/* <TextEditing></TextEditing> */}
      </Routes>
    </div>
  );
}

export default App;
