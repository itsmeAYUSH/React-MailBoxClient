import React from "react";
import { ListGroup } from "react-bootstrap";
import SentMessageListItem from "./SendmessageItem";

import { useSelector } from "react-redux";
const SentMessage = () => {
  const sentItem = useSelector((state) => state.mymail.sentItem);
  // console.log(sentItem);

  return (
    <>
      <ListGroup as="ul">
        {sentItem.map((item) => (
          <SentMessageListItem
            key={item.id}
            email={item.email}
            subject={item.subject}
            text={item.text}
            id={item.id}
            readreceipt={item.readreceipt}
          ></SentMessageListItem>
        ))}
      </ListGroup>
    </>
  );
};
export default SentMessage;
