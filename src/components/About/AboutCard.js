import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, thank you for visiting my page! I'm <span className="purple">Jessica Saddington </span> 
            from <span className="purple"> Austin, TX</span> and a recent graduate of the University of Texas (Austin) Full Stack Coding Bootcamp.
            <br />
            <br />
            Formerly a restaurateur, I decided to level up my technical skills to pursue a career in web development.  I have over a decade of work experience in management and small-business ownership, and I am a quick learner and problem-solver.  
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hunting
            </li>
            <li className="about-activity">
              <ImPointRight /> Motorcycle Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make Results Happen."{" "}
          </p>
          <footer className="blockquote-footer">J. Saddington</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
