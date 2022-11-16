import React, { useEffect, useState } from "react";
import "../../src/App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { checkStatus } from "./checkStatus";
import ModalFooter  from "./ModalFooter";
import Location from "./LocationTab/Location";
import StartegyTab from "./StartegyTab";
import NameInput from "./NameInput";
import TypeInput from "./TypeInput";
import DurationInput from "./DurationInput";


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
    console.log(formState)
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

              <NameInput formState={formState} setFormState={setFormState}/>

              <TypeInput formState={formState} setFormState={setFormState}/>

              <DurationInput formState={formState} setFormState={setFormState}/>
            </Row>

            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Location">
                <Row className="mb-4">

                  <Location formState={formState} setFormState={setFormState} cLga={cLga} setLga={setLga} cWard={cWard} setWard={setWard}/>

                </Row>
              </Tab>
              <Tab eventKey="profile" title="Strategy">
                <Row>

                  <StartegyTab cStrategy={cStrategy} setStrategy={setStrategy}/>

                </Row>

              </Tab>
            </Tabs>
          </Form>
        </Modal.Body>

        <ModalFooter handleClose={handleClose} submitForm={submitForm}/>

      </Modal>

    </>
  );
}
export default ModalForm;
