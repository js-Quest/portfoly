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
            from <span className="purple"> Austin, TX</span> and a graduate of the University of Texas (Austin) Full Stack Certification Program.
            <br />
            <br />
            Through my work experience, I have developed and honed many integral skills. I'm passionate about creating innovative solutions and enhancing user experiences. I excel at problem-solving, adapting to dynamic environments, and delivering efficient solutions to complex challenges. As a team player, I build strong relationships through effective communication. I consistently exceed expectations, delivering projects on time and within budget with exceptional attention to detail. Currently seeking new opportunities in the tech industry to drive impactful results. Let's connect and explore how I can contribute to your organization's success as a dedicated and driven developer.
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
