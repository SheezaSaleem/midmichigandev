import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cta = () => {
  return (
    <Container
      className="pt-5 px-5"
      style={{ marginTop: 120, marginBottom: 150, backgroundColor: "#5BB286" }}
    >
      <Row>
        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="my-5"
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                transform: "rotate(15deg)",
                alignItems: "center",
                position: "relative",
              }}
            ></div>
            <div
              className="d-flex justify-content-center align-items-center baloo2-bold"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "#fff",
                transform: "none",
                position: "absolute",
                top: 1,
                fontSize: 35,
                color: "#FF5E5E",
              }}
            >
              25+
            </div>
            <p
              className="baloo2-bold mt-5"
              style={{ fontSize: 25, color: "white" }}
            >
              Years Experiences
            </p>
          </div>
        </Col>

        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5" style={{ position: "relative" }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                transform: "rotate(15deg)",
                alignItems: "center",
                position: "relative",
              }}
            ></div>
            <div
              className="d-flex justify-content-center align-items-center baloo2-bold"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "#fff",
                transform: "none",
                position: "absolute",
                top: 1,
                fontSize: 35,
                color: "#F9B73F",
              }}
            >
              700
            </div>
            <p
              className="baloo2-bold mt-5"
              style={{ fontSize: 25, color: "white" }}
            >
              Great Vounteers
            </p>
          </div>
        </Col>

        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5" style={{ position: "relative" }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                transform: "rotate(15deg)",
                alignItems: "center",
                position: "relative",
              }}
            ></div>
            <div
              className="d-flex justify-content-center align-items-center baloo2-bold"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "#fff",
                transform: "none",
                position: "absolute",
                top: 1,
                fontSize: 35,
                color: "#6177FF",
              }}
            >
              25k+
            </div>
            <p
              className="baloo2-bold mt-5"
              style={{ fontSize: 25, color: "white" }}
            >
              Satisfied Clients
            </p>
          </div>
        </Col>

        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5" style={{ position: "relative" }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                transform: "rotate(15deg)",
                alignItems: "center",
                position: "relative",
              }}
            ></div>
            <div
              className="d-flex justify-content-center align-items-center baloo2-bold"
              style={{
                height: 130,
                width: 130,
                borderRadius: 10,
                backgroundColor: "#fff",
                transform: "none",
                position: "absolute",
                top: 1,
                fontSize: 35,
                color: "#B440FF",
              }}
            >
              30+
            </div>
            <p
              className="baloo2-bold mt-5"
              style={{ fontSize: 25, color: "white" }}
            >
              Awards Achieve 
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cta;
