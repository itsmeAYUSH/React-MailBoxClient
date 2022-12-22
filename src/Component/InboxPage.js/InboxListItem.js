import React from "react";
import { Col, Container, ListGroup, Row, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { UpdateList } from "../../Store/Mail-thunk";
import Button from "react-bootstrap/Button";

import { DeleteMail } from "../../Store/Mail-thunk";
import { Link } from "react-router-dom";
import { MailSliceAction } from "../../Store/MailSlice";

const InboxListItem = (props) => {
  const Dispatch = useDispatch();

  let Readreceipt;
  if (!props.readreceipt) {
    Readreceipt = "warning";
  }
  const ListItemHandler = () => {
    if (props.readreceipt) {
      Dispatch(MailSliceAction.addMessageViewinfo(props));
      return;
    }
    Dispatch(UpdateList(props));
    Dispatch(MailSliceAction.addMessageViewinfo(props));
  };
  const deleteHandler = () => {
    Dispatch(DeleteMail(props.id));
    // console.log(props.id);
  };
  return (
    <>
      <ListGroup.Item
        id={props.id}
        className="m-.3 "
        variant={Readreceipt && "primary"}
        key={props.id}
      >
        <Row>
          <Col className="pb-3">
            <div className="readreceiptbox" onClick={ListItemHandler}>
              {/* <div className={`${Readreceipt}`}>.</div> */}
              <Badge pill bg={`${Readreceipt}`}>
                {Readreceipt && "unread"}
              </Badge>
              <Link to="mailview">{props.From}</Link>
            </div>
          </Col>

          <Col md={1} style={{ height: "20px" }}>
            <Button variant="secondary" onClick={deleteHandler}>
              delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};
export default InboxListItem;
