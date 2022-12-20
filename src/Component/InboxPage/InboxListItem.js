import React from "react";
import { ListGroup } from "react-bootstrap";

const InboxListItem = (props) => {
  console.log(props);
  //   console.log(Items);
  const ListItemHandler = () => {
    console.log(props);
  };
  return (
    <>
      <ListGroup.Item
        id={props.id}
        className="m-1 "
        variant="primary"
        key={props.id}
        action
        onClick={ListItemHandler}
      >
        {props.email}
      </ListGroup.Item>
    </>
  );
};
export default InboxListItem;