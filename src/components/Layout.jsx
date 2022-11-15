import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ModalForm from "./ModalForm";
import React, { useEffect, useState } from "react";

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
        <div style={{ backgroundColor: "#f5f6fa", height: "100vh" }}>
          <Container fluid="xl">
            <div>
              <div className="content">
                <div className="content-info">
                  <Image
                    src={require("./assets/book-pen.png")}
                    style={{ height: "130px", width: "130px" }}
                  />
                  <p>
                    No campaigns found.{" "}
                    <button
                      style={{
                        color: "blue",
                        border: "none",
                        backgroundColor: "#f5f6fa",
                      }}
                      onClick={handleShow}
                    >
                      Add Campaigns
                    </button>{" "}
                    to start recording
                    <br /> and managing campaigns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div style={{ backgroundColor: "#f5f6fa", height: "100vh" }}>
          <Container fluid="xl">
            <Row>
              <Col className="top-row table-container" sm>
                <Form.Control
                  type="Search"
                  value={searchValue}
                  className="search"
                  style={{ width: "200px" }}
                  placeholder="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <Row>
                  <Col>
                    <Table>
                      <thead>
                        <tr>
                          <th>CAMPAIGN NAME</th>
                          <th>TYPE</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterRecords.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <input type="radio" />
                                <button
                                  style={{
                                    color: "blue",
                                    border: "none",
                                    backgroundColor: "#ffff",
                                  }}
                                  onClick={() => handleEdit(item.id)}
                                >
                                  {item.name} {item.startdate}
                                </button>
                              </td>

                              <td>{item.type}</td>
                              <td style={{ color: `${item.statusColor}` }}>
                                {item.status}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
export default Layout;
