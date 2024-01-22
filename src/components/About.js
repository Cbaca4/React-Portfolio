import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Portfolio_Headshot.png";
import "../style/About.css";

function About() {
    return (
        <section id="about" className="py=5">
            <h1 className="about-heading">About Me</h1>
            <Container>
                <Row>
                    <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content align-items-center mb-4 mb-md-0"
                    >
                        <Image src={avatar} rounded fluid className="about-image" />
                    </Col>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                            About Cristian Baca
                            </Card.Title>
                            <Card.Text>
                                Hello, my name is Cristian, a very passionate 23 year old, from Texas and I have discovered my purpose across a diverse array of fields, including Philosophy, Coding, Sports, Science, and philanthrophy.
                                </Card.Text>
                                </Card.Body>
                                </Card>
                                </Col>
                                </Row>
            </Container>
        </section>
    );
}

export default About;