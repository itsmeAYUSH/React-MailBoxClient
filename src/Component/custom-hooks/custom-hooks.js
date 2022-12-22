import { useEffect, useState } from "react";

const useApi = () => {
  const [loadingstate, setloadingstate] = useState("");
  const [idToken, setidToken] = useState(null);
  const SendData = async (data) => {
    setloadingstate("sending");
    try {
      const response = fetch(data.url, {
        method: "POST",
        body: JSON.stringify(data.obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const Data = await response.json();
      if (Data.error) {
        setloadingstate("error");
        throw new Error("error");
      }
      //data tranform function or storing data for reuse
      localStorage.setItem("id", data.idToken);
      localStorage.setItem("islogin", "true");
      localStorage.setItem("mailid", obj.email);
      setidToken(Data.idToken);
    } catch (error) {
      console.log(error);
    }
    setloadingstate(null);
  };
  return {
    loadingstate,
    idToken,
    SendData,
  };
};
export default useApi;
