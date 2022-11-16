import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const LgaInput = ({cLga , setLga}) => {
  return (
    <>
        <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>LGA</Form.Label>

                    <Form.Select
                  
                      value={cLga}
                      onChange={(e) => setLga(e.target.value)}
                    >
                      <option value="DEFAULT" disabled>
                        LGA
                      </option>
                      <option value="RI">MMC</option>
                      <option value="Bama">Bama</option>
                      <option value="Ungogo">Ungogo</option>
                      <option value="Fagge">Fagge</option>
                      <option value="Dapchi">Dapchi</option>
                      <option value="Chibok">Chibok</option>
                      <option value="Dapchi">Dapchi</option>
                      <option value="Damasak">Damasak</option>
                    </Form.Select>
                  </Form.Group>
    </>
  )
}

export default LgaInput