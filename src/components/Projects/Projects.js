import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import readypetgo from "../../assets/readyPetGo.png";
import playtimeover from "../../assets/playtimeover.png";
import weatherup from "../../assets/weatherup.png";
import orm from "../../assets/orm.png"
import shorty from "../../assets/shorty-gonna.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readypetgo}
              isBlog={false}
              title="Ready, Pet, Go!"
              description="MERN Stack App focused on current, new, and future pet-owners.  Combines social media profile and picture uploads for the user and the user's pets, with ecommerce Stripe transactions for purchasing items, as well as integrating a real-time chat app and a community forum for posts with comments/feedback."
              ghLink="https://github.com/js-Quest/ready-pet-go"
              demoLink="https://ready-pet-go-835e6edf1caa.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playtimeover}
              isBlog={false}
              title="Playtime-Over"
              description="This is a 2-D arcade-style animated video game! This app was built using Javascript and HTML5 Canvas methods, as well as MySQL, Express, Express-session, and Handlebars.  Please mind the volume level, as there are sound effects and music (toggle the music on/off by clicking anywhere on the screen)."
              ghLink="https://github.com/js-Quest/play-time-over"
              demoLink="https://play-time-over.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shorty}
              isBlog={false}
              title="Shorty-Gonna-Read"
              description="This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package and the fs package. Please refer to the package.json file for the versions of the dependencies used. This application was built using Node.js"
              ghLink="https://github.com/js-Quest/shorty-gonna-read"
              demoLink="https://user-images.githubusercontent.com/128349503/234452878-7ac40e2c-eb4d-4286-836e-89f2e41099f9.webm"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherup}
              isBlog={false}
              title="Under My Umbrella"
              description="Weather application with a 5 day forecast. It calls and displays information from the Openweathermap API depending on the user input. It also presents the user with up to 5 recent search values from local storage for quick access to previous searches. The mobile-responsive interface includes a horizontal scroll bar at the bottom for the future weather forecast display for small screens."

              ghLink="https://github.com/js-Quest/under-my-umbrella"
              demoLink="https://js-quest.github.io/under-my-umbrella/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orm}
              isBlog={false}
              title="ORM-My-Gawd"
              description="A sample backend database for an ecommerce site using Object Relational Mapping techniques and MySQL, with full CRUD capabilities."
              ghLink="https://github.com/js-Quest/orm-my-gawd"
              demoLink="https://drive.google.com/file/d/1WZbH10fRAVTGMvlrApJT3TQXpaWbCBtL/view"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
