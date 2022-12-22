import React, { useEffect } from "react";
import useApi from "./custom-hooks/custom-hooks";
import { useRef } from "react";

const DummyloginForm = () => {
  const Enteredmail = useRef(null);
  const EnteredPassword = useRef(null);
  const { loadingstate, idToken, SendData: logingRequest } = useApi();

  useEffect(() => {
    console.log(idToken);
  }, []);

  const onsubmitHnadler = (event) => {
    event.preventDefault();
    const userobj = {
      email: Enteredmail.current.value,
      password: EnteredPassword.current.value,
      returnSecureToken: true,
    };
    
    logingRequest({
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeOmTN-OJwqeFOPe7WJ8JzHAsNN90zUVE",
      obj: userobj,
    });
  };
  return (
    <div>
      <form onSubmit={onsubmitHnadler}>
        <h3>{loadingstate}</h3>
        <label htmlFor="email">Email</label>
        <input type="email" ref={Enteredmail}></input>
        <label htmlFor="password">Password</label>
        <input type="password" ref={EnteredPassword}></input>
        <button type="submit">login</button>
      </form>
    </div>
  );
};
export default DummyloginForm;
