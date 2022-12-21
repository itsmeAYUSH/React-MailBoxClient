import React from "react";
import { ListGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { MailSliceAction } from "../../Store/MailSlice";
import { UpdateList } from "../../Store/Mail-thunk";

const InboxListItem = (props) => {
  const Dispatch = useDispatch();

  let Readreceipt;
  if (!props.readreceipt) {
    Readreceipt = "readreceipt";
  }
  const ListItemHandler = () => {
    if (props.readreceipt) {
      return;
    }
    Dispatch(UpdateList(props));
    // Dispatch(MailSliceAction.updataItems(props));
    // console.log(props);
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
        <div className="readreceiptbox">
          <div className={`${Readreceipt}`}>.</div>
          {props.email}
        </div>
      </ListGroup.Item>
    </>
  );
};
export default InboxListItem;
