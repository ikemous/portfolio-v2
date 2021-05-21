import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import { FaGithubSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const socialsStyle = {
    textAlign: "center",
    alignContent: "center",
    marginLeft: 0,
    marginRight: 0,
    placeItems: "end",
    alignSelf: "flex-end",
    width: "100%",
};

export default function PageContainer({ children }) {

    return (
        <Container style={{background: "Black"}} fluid>
            <Row style={{background: "Black", minHeight: "100vh"}}>
                {/* Socials */}
                <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 1}} style={{ display: "flex", fontSize: "2rem"}}>
                    <Row className="pb-2" style={socialsStyle}>
                        <Col xs={6} md={12}>
                            <a href="https://github.com/ikemous" rel="noopener noreferrer" target="_blank">
                                <FaGithubSquare style={{color: "purple"}}/>
                            </a>
                        </Col>
                        <Col xs={6} md={12}>
                            <a href="https://www.linkedin.com/in/ike-barranco/" rel="noopener noreferrer" target="_blank">
                                <SiLinkedin style={{color: "purple"}} />
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ order: 1, span: 12 }} md={{ order: 1, span: 11}}>
                    <Row>
                        <Navigation />
                    </Row>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};