import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { UpdateList } from "../../Store/Mail-thunk";
import Button from "react-bootstrap/Button";

import { DeleteMail } from "../../Store/Mail-thunk";
import { Link } from "react-router-dom";

const InboxListItem = (props) => {
  const Dispatch = useDispatch();
  // console.log(props);
  //   console.log(Items);
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
  const deleteHandler = () => {
    Dispatch(DeleteMail(props.id));
    console.log(props.id);
  };
  return (
    <>
      <ListGroup.Item
        id={props.id}
        className="m-.3 "
        variant="primary"
        key={props.id}
      >
        <Container>
          <Row>
            <Col className="pb-3">
              <div className="readreceiptbox" onClick={ListItemHandler}>
                <div className={`${Readreceipt}`}>.</div>
                <Link to="mailview">{props.email}</Link>
              </div>
            </Col>

            <Col md={1} style={{ height: "20px" }}>
              <Button variant="secondary" onClick={deleteHandler}>
                delete
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </>
  );
};
export default InboxListItem;