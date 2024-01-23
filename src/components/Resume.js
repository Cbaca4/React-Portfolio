import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/Resume.pdf";

function Resume() {
    return (
        <section id="resume" className="resume-margin">
            <Container className="resume-section">
                <Row>
                    <Col className="text-center">
                        <h1>Resume</h1>
                        <hr className="star-primary" />
                        <Button variant="dark" href={PDF} download>
                            download Resume
                        </Button>
                    </Col>
                </Row>
                <Row>
                <Col>
                <h3>Technical Skills</h3>
                <hr className="star-secondary" />
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <strong>Language:</strong> JavaScript, React, CSS
                        </li>
                        <li className="list-inline-item">
                            <strong>Database</strong> MongoDB, MySQL, React
                            </li>
                            <li className="list-inline-item">
                                <strong>Tools/Platform</strong> Git, Github, Heroku, AWS, Netlify
                                </li>
                                </ul>
                                </Col>
                                </Row>
                                <Row>
                                 <Col>
                                 <h3>Education</h3>
                                 <hr className="star-secondary" />
                                 <div className="resume-item">
                                    <h4>Bachelors of Science in Computer Science</h4>
                                    <h5> University of Texas at San Antonio</h5>
                                    <p> Real recognize real</p>
                                    </div>
                                </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <h3>Work Experience</h3>
                                    <hr className="star-secondary" />
                                    <div className="resume-item">
                                        <h4>Enter job</h4>
                                        <h5>company, years</h5>
                                        <p>
                                            bag chaser
                                        </p>
                                        </div>
                                        <div className="resume-item">
                                        <h4>Enter job</h4>
                                        <h5>company, years</h5>
                                        <p>
                                            bag chaser
                                        </p>
                                        </div>
                                        </Col>
                                        </Row>
                                        <Row>
                                        <Col>
                                            <h3>Proficiences</h3>
                                            <ul>
                                                <li>HTML/CSS</li>
                                                <li>JavaScript</li>
                                                <li>
                                                    <span className="teal-color">M</span>
                                                    MongoDB
                                                </li>
                                                <li>
                                                    <span className="teal-color">E</span>xpress
                                                </li>
                                                <li>
                                                    <span className="teal-color">R</span>eact
                                                </li>
                                                <li>
                                                    <span className="teal-color">N</span>ode.js
                                                </li>
                                                <li>SQL</li>
                                            </ul>
                                            </Col>
                                        </Row>
            </Container>
        </section>
    );
}

export default Resume;