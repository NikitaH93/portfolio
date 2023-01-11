import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi i'm <span className="purple">Nikita</span> , I started to program around 10 years ago and have a Degree in <span className="purple">Computer Science</span>
            <br />Currently i am working on meeting new clients and growing my client list for 2023.
            <br />
            <br />
	  My Goals for year <span className="purple">2023</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Double client list from last year 
            </li>
            <li className="about-activity">
              <ImPointRight /> Have more of an online presence  
            </li>
            <li className="about-activity">
              <ImPointRight /> Deliver more great products 
            </li>
          </ul>

          <p style={{ color: "rgb(126 232 250)" }}>
            "This year i will continue to live my dream!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
