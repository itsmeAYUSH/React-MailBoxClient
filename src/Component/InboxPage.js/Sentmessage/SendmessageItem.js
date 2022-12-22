import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MymailSliceAction } from "../../../Store/MymailSlice";

const SentMessageListItem = (props) => {
  const sentItems = useSelector((state) => state.mymail.sentItem);
  const Dispatch = useDispatch();

  let Readreceipt;
  if (!props.readreceipt) {
    Readreceipt = "readreceipt";
  }
  const ListItemHandler = () => {
    // console.log("sendmeeage page", props);
    Dispatch(MymailSliceAction.addMessageViewinfo(props));
  };
  const deleteHandler = () => {
    console.log("delete");
    let oldarry = sentItems;
    if (oldarry.length !== 1) {
      let sentItem = oldarry.filter((item) => item.id !== props.id);
      Dispatch(MymailSliceAction.updateSendItem(sentItem));
    } else {
      Dispatch(MymailSliceAction.updateSendItem([]));
    }
  };
  return (
    <>
      <ListGroup.Item
        id={props.id}
        className="m-.3 "
        key={props.id}
        variant="success"
      >
        <Container>
          <Row>
            <Col className="pb-3">
              <div className="readreceiptbox" onClick={ListItemHandler}>
                <Link to="sentmailview">{props.email}</Link>
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
export default SentMessageListItem;
