import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import ExperienceCard from "../components/ExperienceCard";
import TitleBar from "../components/TitleBar";

import UMassLogo from "../assets/webp/umass-logo.webp";

import InnovationMLogo from "../assets/webp/innovationm-logo.webp";


import UMassFallbackLogo from "../assets/jpg/umass-logo.jpg";

import InnovationMFallbackLogo from "../assets/jpg/innovationm-logo.jpg";

class Experience extends Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="inner-structure center" style={{ flexDirection: "column" }}>
                    <TitleBar title="Eployment" />
                    <Container fluid style={{ textAlign: "center" }}>
                        <Row style={{ display: "inline-flex" }}>
                            <ExperienceCard
                                image={InnovationMLogo}
                                fallback_image={InnovationMFallbackLogo}
                                title="Junior Teacher / Technician"
                                organization="Sithuthukile Junior Secondary School"
                                
                                duration="2016 - 2018"
                                details={
                                    <React.Fragment>
                                        • Developing a school website
                                        <br />
                                        •  Teach Microsoft word, excel and access, as well as html
                                        <br />
                                        • Manage computer labs
                                    </React.Fragment>
                                }
                            />
                            <ExperienceCard
                                image={UMassLogo}
                                fallback_image={UMassFallbackLogo}
                                title="Student Assistant"
                                organization="TUT"
                                duration="September 2018 - 2020"
                                details={
                                    <React.Fragment>
                                        • One on one sessions with students
                                        <br />
                                        • Schedule lessons
                                        <br />
                                        • Track attendance
                                    </React.Fragment>
                                }
                            />
                            
                        </Row>
                    </Container>
                    <TitleBar title="Achievements" />
                    <Container fluid style={{ textAlign: "center" }}>
                        <Row style={{ display: "inline-flex" }}>
                            <ExperienceCard
                                image={UMassLogo}
                                fallback_image={UMassFallbackLogo}
                                title="Graduation"
                                organization="Tshwane University of Technology"
                               
                               duration="November 2021"
                                
                            />
                            
                            
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Experience;
