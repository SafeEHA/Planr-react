import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const DurationInput = ({formState, setFormState }) => {
  return (
    <>
        <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  value={formState.startdate}
                  type="date"
                  onChange={(e) =>
                    setFormState({ ...formState, startdate: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label></Form.Label>
                <Form.Control
                  value={formState.enddate}
                  type="date"
                  onChange={(e) =>
                    setFormState({ ...formState, enddate: e.target.value })
                  }
                />
              </Form.Group>
    </>
  )
}

export default DurationInput