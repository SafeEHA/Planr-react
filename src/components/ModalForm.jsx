import React, { useEffect, useState } from "react";
import "../../src/App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { checkStatus } from "./checkStatus";

function ModalForm(props) {
  const {
    handleClose,
    handleShow,
    show,
    records,
    setRecords,
    formState,
    setFormState,
    edit,
  } = props;

  const [key, setKey] = useState("home");
  const [cLga, setLga] = useState("");
  const [cWard, setWard] = useState("");
  const [cStrategy, setStrategy] = useState("");

  const editCampaign = (name, type, startdate, enddate, state, status, statusColor, id) => {
    const newRecords = records.map((record) => {
      return record.id === id
        ? { name, state, type, startdate, enddate, status, statusColor, id }
        : record;
        
    });
    console.log(newRecords);
    setRecords(newRecords);

     localStorage.setItem("campaign", JSON.stringify(newRecords));
  };
  const submitForm = () => {
    const { name, type, startdate, enddate, state } = formState;
    if (
      name === "" ||
      name.length < 1 ||
      state === "" ||
      startdate === "" ||
      enddate === "" ||
      type === ""
    ) {
      return alert(`check for empty fields`);
    }
    let [status, statusColor] = checkStatus(
      formState.startdate,
      formState.enddate
    );

    if (!edit) {
      let formObjects = {
        name: name,
        type: type,
        status: status,
        startdate: startdate,
        enddate: enddate,
        state: state,
        lga: cLga,
        ward: cWard,
        strategy: cStrategy,
        statusColor: statusColor,
        id: new Date().getTime(),
      };

      setRecords([...records, formObjects]);

      localStorage.setItem(
        "campaign",
        JSON.stringify([...records, formObjects])
      );
    } else {
      editCampaign(name, type, startdate, enddate, state, status, statusColor, edit.id);
    }
    handleClose();
  
    setFormState({
      ...formState,
      name: "",
      type: "",
      startdate: "",
      enddate: "",
      state: "",
    });
  };

  useEffect(() => {
    let data = localStorage.getItem("campaign");

    if (data) {
      setRecords(JSON.parse(data));
    } else {
      setRecords([]);
    }
  }, []);

  return (
    <>
      <Button className="c-btn"variant="primary" onClick={handleShow}>
        Add Campaign
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Campaign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitForm}>
            <Row className="mb-3">
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

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Type</Form.Label>

                <Form.Select
                  value={formState.type}
                  defaultValue={"DEFAULT"}
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
            </Row>

            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Location">
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>STATE</Form.Label>

                    <Form.Select
                      value={formState.state}
                      defaultValue={"DEFAULT"}
                      onChange={(e) =>
                        setFormState({ ...formState, state: e.target.value })
                      }
                    >
                      <option value="DEFAULT" disabled>
                        State
                      </option>
                      <option value="ABUJA FCT">ABUJA FCT</option>
                      <option value="ABIA">ABIA</option>
                      <option value="ADAMAWA">ADAMAWA</option>
                      <option value=">AKWA IBOM">AKWA IBOM</option>
                      <option value="ANAMBRA">ANAMBRA</option>
                      <option value="BAUCHI">BAUCHI</option>
                      <option value="BAYELSA">BAYELSA</option>
                      <option value="BENUE">BENUE</option>
                      <option value="BORNO">BORNO</option>
                      <option value="CROSS RIVER">CROSS RIVER</option>
                      <option value="DELTA">DELTA</option>
                      <option value="EBONYI">EBONYI</option>
                      <option value="EDO">EDO</option>
                      <option value="EKITI">EKITI</option>
                      <option value="ENUGU">ENUGU</option>
                      <option value="GOMBE">GOMBE</option>
                      <option value="IMO">IMO</option>
                      <option value="JIGAWA">JIGAWA</option>
                      <option value="KADUNA">KADUNA</option>
                      <option value="KANO">KANO</option>
                      <option value="KATSINA">KATSINA</option>
                      <option value="KEBBI">KEBBI</option>
                      <option value="KOGI">KOGI</option>
                      <option value="KWARA">KWARA</option>
                      <option value="LAGOS">LAGOS</option>
                      <option value="NASSARAWA">NASSARAWA</option>
                      <option value="NIGER">NIGER</option>
                      <option value="OGUN">OGUN</option>
                      <option value="ONDO">ONDO</option>
                      <option value="OSUN">OSUN</option>
                      <option value="OYO">OYO</option>
                      <option value="PLATEAU">PLATEAU</option>
                      <option value="RIVERS">RIVERS</option>
                      <option value="SOKOTO">SOKOTO</option>
                      <option value="TARABA">TARABA</option>
                      <option value="YOBE">YOBE</option>
                      <option value="ZAMFARA">ZAMFARA</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>LGA</Form.Label>

                    <Form.Select
                      defaultValue={"DEFAULT"}
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

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>WARD</Form.Label>

                    <Form.Select
                      defaultValue={"DEFAULT"}
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
                </Row>
              </Tab>
              <Tab eventKey="profile" title="Strategy">
                <Row>
                  <Col>
                    <Form.Check
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
                </Row>
              </Tab>
            </Tabs>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={submitForm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalForm;
