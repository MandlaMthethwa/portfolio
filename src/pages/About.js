import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/webp/professional-me.webp";
import FallbackProfessionalHeadshot from "../assets/jpg/professional-me.jpg";

class About extends React.Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="inner-structure center" style={{ flexDirection: "column" }}>
                    <TitleBar title="About Me" />
                    <Container fluid style={{ padding: "1.5em" }}>
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <Col style={{ textAlign: "center" }}>
                                <picture>
                                    <source cclassName="header-img" type="image/webp" srcset={ProfessionalHeadshot} />
                                    <img className="header-img" src={FallbackProfessionalHeadshot} alt="header" fluid />
                                </picture>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <Col lg="10">
                                <p
                                    id="about"
                                    className="secondary-text"
                                    style={{
                                        padding: "25px 10px",
                                        textAlign: "justify",
                                        color: "#111111",
                                        margin: "0w",
                                    }}
                                >
                                    I am a Software Developer Graduate, studied at Tshwane University of Technology with experience in developing hybrid, full stack mobile and web applications. 
                                    I am familiar with most programming technologies .
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                                <FontAwesomeIcon icon={faFileAlt} /> Resume
                            </Button>
                            
                        </Row>
                        <Row className="justify-content-center">
                            <Button className="resume-btn" href="/cover.pdf" target="_blank" size="lg">
                                <FontAwesomeIcon icon={faFileAlt} /> Cover letter
                            </Button>
                            
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default About;
