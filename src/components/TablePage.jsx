import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


const TablePage = ({filterRecords, setSearchValue, searchValue, handleEdit}) => {
        return <>
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
        </>
}

export default TablePage;