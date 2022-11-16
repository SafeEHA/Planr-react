import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import ContentPage from "./ContentPage";
import ModalForm from "./ModalForm";
import TablePage from "./TablePage";

function Layout() {
  const [formState, setFormState] = useState({
    name: "",
    type: "",
    startdate: "",
    enddate: "",
    state: "",
  });

  const [edit, setEdit] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    if (edit) {
      setEdit(null);
    }
  };
  const handleShow = () => setShow(true);

  const [records, setRecords] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("campaign");

    if (data) {
      setRecords(JSON.parse(data));
    } else {
      setRecords([]);
    }
  }, []);

  const filterRecords = records.filter((record) => {
    return record.status.toLowerCase().includes(searchValue.toLowerCase());
  });
  const handleEdit = (id) => {
    const findRecords = records.find((record) => record.id === id);
    setEdit(findRecords);
    setFormState(findRecords);

    handleShow();
    console.log(findRecords);
  };

  return (
    <>
      <Row className="top-row">
        <Col>
          <h2>Manage Campaigns</h2>
        </Col>
        <Col lg="2">
          <ModalForm
            handleShow={handleShow}
            show={show}
            handleClose={handleClose}
            records={records}
            setRecords={setRecords}
            formState={formState}
            setFormState={setFormState}
            edit={edit}
          />
        </Col>
      </Row>

      {!records || records.length < 1 ? (
        <ContentPage handleShow={handleShow} />
      ) : (
        <TablePage
          filterRecords={filterRecords}
          handleEdit={handleEdit}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      )}
    </>
  );
}
export default Layout;
