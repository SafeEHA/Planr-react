import React from 'react';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal";

const ModalFooter = ({handleClose, submitForm}) => {
  return (
    <>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={submitForm}>
            Save
          </Button>
        </Modal.Footer>
    </>
  )
}

export default ModalFooter