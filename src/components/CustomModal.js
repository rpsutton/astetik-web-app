import React from "react";
import Modal from "react-bootstrap/Modal";
import FormComponent from "./FormComponent";
import Alert from "react-bootstrap/Alert";

export default function CustomModal(props) {
    const showAlert = props.showAlert
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Search advice by a keyword
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {showAlert && <Alert variant="danger">We could not find advice containing that word :(</Alert>}
            <FormComponent keyword={props.keyword} handlekeywordchange={props.handlekeywordchange} searchQuote={props.searchQuote} setIsLoaded={props.setIsLoaded}/>
        </Modal.Body>
      </Modal>
    );
  }


  