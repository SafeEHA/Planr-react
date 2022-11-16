import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const NameInput = ({formState, setFormState}) => {
  return (
    <>
        <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Campaign Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </Form.Group>
    </>
  )
}

export default NameInput