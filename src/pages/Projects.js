import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";

class Projects extends React.Component {
    render() {
        return (
            <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
                <div className="center inner-structure" style={{ flexDirection: "column" }}>
                    <TitleBar title="Projects" />
                    <Container fluid>
                        <Row className="justify-content-center" style={{ alignItems: "center" }}>
                            <h1>Portfolio : 
                                Technologies - JavaScript , Reactjs , Nodejs , HTML/CSS
                                About - This is a project for a personal online resume 
                                 Link - https://mandlamthethwa.vercel.app/ </h1>
                            <h1> 
                                labtrack : 
                                Technologies - PHP , PHPmyadmin , HTML/CSS
                                About - Application to track attandance for students 
                                Link - https://github.com/MandlaMthethwa/labrack
                             </h1>
                            
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Projects;
