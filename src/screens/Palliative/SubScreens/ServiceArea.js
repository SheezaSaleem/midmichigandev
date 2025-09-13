import { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AppContext from "../../../context/AppContext";
import areaImg from "../../../assets/images/midmichiganmap.webp";

const ServiceArea = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <Container className="serviceAreaContainer">
      <Row>
        <Col lg={6} sm={12}>
          <Image
            src={areaImg}
            className="areaImg"
            height={isDesktopOrLaptop ? 500 : 400}
            width={isDesktopOrLaptop ? 500 : 400}
            alt
          />
        </Col>

        <Col lg={6} sm={12}>
          <h5 className="baloo2-extraBold serviceAreaShortHeading">
            Areas of Service
          </h5>
          <h1 className="baloo2-extraBold">We serve the Michigan <br/> counties of</h1>
          <Row className="py-3">
            <Col lg={3} sm={12}>
              <ul>
                <li>Barry</li>
                <li>Bay</li>
                <li>Branch</li>
                <li>Calhoun</li>
                <li>Clinton</li>
                <li>Eaton</li>
                <li>Genesee</li>
                <li>Hillsdale</li>
                <li>Huron</li>
                <li>Ingham</li>
              </ul>
            </Col>

            <Col lg={3} sm={12}>
              <ul>
                <li>Lonia</li>
                <li>Jackson</li>
                <li>Kalamazoo</li>
                <li>Lapeer</li>
                <li>Lenawee</li>
                <li>Livingston</li>
                <li>Macomb</li>
                <li>Midland</li>
                <li>Monroe</li>
              </ul>
            </Col>

            <Col lg={3} sm={12}>
              <ul>
                <li>Oakland</li>
                <li>Saginaw</li>
                <li>Sanilac</li>
                <li>Shiawassee</li>
                <li>St. Clair</li>
                <li>St.Joseph</li>
                <li>Tuscola</li>
                <li>Washtenaw</li>
                <li>Wayne</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceArea;
