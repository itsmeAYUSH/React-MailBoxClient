import React from "react";
import { ListGroup } from "react-bootstrap";
import InboxListItem from "./InboxListItem";
import { useEffect } from "react";
import { UpdateList } from "../../Store/Mail-thunk";

import { useSelector, useDispatch } from "react-redux";
const InboxList = () => {
  const Items = useSelector((state) => state.mail.items);
  //   console.log(Items);

  return (
    <>
      <ListGroup as="ul" variant="primary">
        {Items.map((item) => (
          <InboxListItem
            key={item.id}
            email={item.email}
            message={item.subject}
            text={item.text}
            id={item.id}
            readreceipt={item.readreceipt}
          ></InboxListItem>
        ))}
      </ListGroup>
    </>
  );
};
export default InboxList;
