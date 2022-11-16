import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const WardInput = ({ cWard, setWard }) => {
  return (
    <>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>WARD</Form.Label>

        <Form.Select
          
          value={cWard}
          onChange={(e) => setWard(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Ward
          </option>
          <option>Ward 1</option>
          <option>Ward 2</option>
          <option>Ward 3</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default WardInput;
