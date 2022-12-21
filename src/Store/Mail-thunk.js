
import { MailSliceAction } from "./MailSlice";
export const sendMailHandler = (mailobj) => {
  return async (Disptach) => {
    let emailId = await mailobj.email.replace(/[&@.]/g, "");
    const sendingmail = async () => {
      const response = await fetch(
        `https://mailboxclient-a899b-default-rtdb.firebaseio.com/${emailId}.json`,
        {
          method: "POST",
          body: JSON.stringify(mailobj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error("faild");
      }
      //   console.log(data);
      return data;
    };
    try {
      await sendingmail();
      Disptach(MailSliceAction.setSentData());
      //   console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getmailHandler = () => {
  let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");
  console.log(emailId);
  return async (Disptach) => {
    const gettingMailList = async () => {
      const response = await fetch(
        `https://mailboxclient-a899b-default-rtdb.firebaseio.com/${emailId}.json`,
        {
          method: "Get",
        }
      );
      const data = await response.json();
      if (data.error) {
        console.log(data);
        throw new Error("faild");
      }
      return data;
    };
    try {
      const data = await gettingMailList();
      // console.log(data);
      const transformeddata = [];
      for (const key in data) {
        const Obj = {
          id: key,
          ...data[key],
        };
        transformeddata.push(Obj);
      }
      // console.log(transformeddata);
      Disptach(MailSliceAction.addItem(transformeddata));
    } catch (error) {
      console.log("error message");
    }
  };
};

export const UpdateList = (obj) => {
  return async (Dispatch) => {
    let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");

    const UpdateEmailList = async () => {
      const response = await fetch(
        `https://mailboxclient-a899b-default-rtdb.firebaseio.com/${emailId}/${obj.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            email: obj.email,
            subject: obj.subject,
            text: obj.text,
            readreceipt: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error("faild");
      }
      return data;
    };
    try {
      await UpdateEmailList();
      Dispatch(MailSliceAction.updataItems());
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteMail = (id) => {
  return async (Dispatch) => {
    let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");

    const DeletingMail = async () => {
      const response = await fetch(
        `https://mailboxclient-a899b-default-rtdb.firebaseio.com/${emailId}/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        console.log(data);
        // throw new Error("faild");
      }
      return data;
    };
    try {
      const data = await DeletingMail();
      Dispatch(MailSliceAction.DeleteItem());
    } catch (error) {
      console.log(error);
      Dispatch(MailSliceAction.DeleteItem());
    }
  };
};