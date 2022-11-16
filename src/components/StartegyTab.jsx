import React from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const StartegyTab = ({cStrategy, setStrategy}) => {
  return (
    <>
    <Col>
                    <Form.Check
                    value={cStrategy}
                      onChange={(e) => setStrategy(e.target.value)}
                      inline
                      label={
                        <>
                          <b>Use Fixed Post</b>
                          <p>
                            select this strategy for field work conducted within
                            2km of a Health
                            <br />
                            Facility (HF).
                          </p>
                        </>
                      }
                      name="group1"
                      type="radio"
                      id={`inline-radio-1`}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                    value={cStrategy}
                      onChange={(e) => setStrategy(e.target.value)}
                      inline
                      label={
                        <>
                          <b>Use Outreach Session</b>
                          <p>
                            Select this strategy for field work conducted 2 -
                            6km from a Health
                            <br />
                            Facility.
                          </p>
                        </>
                      }
                      name="group1"
                      type="radio"
                      id={`inline-radio-1`}
                    />
                  </Col>

                  <Col>

                    <Form.Check
                    value={cStrategy}
                      onChange={(e) => setStrategy(e.target.value)}
                      inline
                      label={
                        <>
                          <b>Use Mobile Session</b>
                          <p>
                            Select this strategy for field work conducted 6km+
                            from a Health
                            <br />
                            Facility.
                          </p>
                        </>
                      }
                      name="group1"
                      type="radio"
                      id={`inline-radio-1`}
                    />
                  </Col>
    </>
  )
}

export default StartegyTab