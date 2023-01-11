import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/hero.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Footer from "./../Footer";
function Home() {
  return (
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 1 }} className="heading">
                Hi I'm{" "} Nikita
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "600px" }}
              />
            </Col>
          </Row>
        </Container>
      <Home2 />

        <Footer />
      </Container>
  );
}

export default Home;
