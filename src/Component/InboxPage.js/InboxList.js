import React from "react";
import { ListGroup } from "react-bootstrap";
import InboxListItem from "./InboxListItem";

import { useSelector } from "react-redux";
const InboxList = () => {
  const Items = useSelector((state) => state.mail.items);
  // console.log(Items);

  return (
    <>
      <ListGroup as="ul" variant="primary" className="p-3">
        {Items.map((item) => (
          <InboxListItem
            key={item.id}
            email={item.email}
            subject={item.subject}
            text={item.text}
            id={item.id}
            From={item.From}
            readreceipt={item.readreceipt}
          ></InboxListItem>
        ))}
      </ListGroup>
    </>
  );
};
export default InboxList;
