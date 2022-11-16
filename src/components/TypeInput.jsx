import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const TypeInput = ({formState, setFormState }) => {
  return (
    <>
        <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Type</Form.Label>

                <Form.Select
                  value={formState.type}
                 
                  onChange={(e) =>
                    setFormState({ ...formState, type: e.target.value })
                  }
                >
                  <option value="DEFAULT" disabled>
                    Campaign Type
                  </option>
                  <option value={"Routine Immunization"}>
                    Routine Immunization
                  </option>
                  <option value={"Covid"}>Covid</option>
                  <option value={"Polio"}>Polio</option>
                </Form.Select>
              </Form.Group>
    </>
  )
}

export default TypeInput