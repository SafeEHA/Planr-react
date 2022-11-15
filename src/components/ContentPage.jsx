import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


const ContentPage = ({handleShow}) => {
    return <>
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
    </>
}

export default ContentPage;