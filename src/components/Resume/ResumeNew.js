import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { Card, CardMedia } from "@mui/material";
import CardOverflow from '@mui/joy/CardOverflow';
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"https://docs.google.com/document/d/1TWoNmQmAhHA04tkS6wEo_nHwJEIZ57SabSo3UN6xWds/export?format=pdf"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Card sx={{ maxWidth: 900 }}>
            <CardOverflow>
              <CardMedia sx={{}}
                overflow='auto'
                className="cardmedia"
                component="iframe"
                Height="1056px"
                src="https://drive.google.com/file/d/1TWoNmQmAhHA04tkS6wEo_nHwJEIZ57SabSo3UN6xWds/preview"
              />
            </CardOverflow>
          </Card>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"https://docs.google.com/document/d/1TWoNmQmAhHA04tkS6wEo_nHwJEIZ57SabSo3UN6xWds/export?format=pdf"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;