import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import game from "../../Assets/game.png";
import suicide from "../../Assets/Projects/suicide.png";
import bakery from "../../Assets/bakerydemo.png"
import Footer from "../Footer";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Latest <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Latest projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Gaming Ecommerce site"
              description="website for buying and selling games made with react and tailwind"
              demoLink="/game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bakery}
              isBlog={false}
              title="Bakery Website"
              description="Simple bakery website where a user can select a cake and get more information from the company"
              demoLink="/bakery"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="My Text Editor"
              description="My Text editor i am creating using Golang"
              demoLink="#"              
            />
          </Col> */}
        </Row>
      </Container>
	  <Footer/>
    </Container>
  );
}

export default Projects;
