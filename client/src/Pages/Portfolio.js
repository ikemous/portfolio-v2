import React, { useState } from "react";
import { Row, Col, Modal, Button, Image} from "react-bootstrap";
import { FaCode, FaInternetExplorer} from "react-icons/fa"
import PageContainer from "../Components/PageContainer";
import ProjectCard from "../Components/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import projects from "../utils/projects";
import { Helmet } from "react-helmet";


export default function Portfolio() {

    return (
        <PageContainer>
            <Helmet>
                <title>Ikemous | Projects</title>
                <meta name="description" content="Ikemous home page" />
                <meta name="keywords" content="Ike, Barranco, Ikemous, Home Page, Projects, Coding" />
            </Helmet>
            <Row className="justify-content-center align-items-center" style={{maxHeight: "88vh", overflowY: "scroll"}}>
                {
                    projects.map(project => 
                        <Row key={uuidv4()} style={{marginBottom:"3vh"}}>
                            <Col 
                                xs={12} md={4} lg={3} 
                                style={{
                                    height: "20vh",
                                    background: `url(${project.src})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat:"no-repeat",
                                }}
                            >
                            </Col>
                            <Col xs={12} md={8} lg={9}>
                                <h2 className="text-center code-const-variable">{project.name}</h2>
                                <p className="code-strings">
                                    {project.description}
                                </p>
                                <p className="code-strings">
                                    Languages Used: <span className="code-log">{project.languages.sort().join(", ")}</span>
                                </p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href={project.gitlink} rel="noopener noreferrer" target="_blank" style={{width: "35%", marginRight: "2vw"}}>
                                        <Button style={{background: "purple", width: "100%"}} variant="secondary">
                                            <FaCode />
                                        </Button>
                                    </a>
                                    {
                                        project.weblink? 
                                            <a href={project.weblink} rel="noopener noreferrer" target="_blank" style={{width: "35%"}}>
                                                <Button ariaLabel={`Button for ${project.name} website link`} style={{background: "purple", width: "100%"}} variant="primary">
                                                    <FaInternetExplorer />    
                                                </Button>
                                            </a>
                                            :
                                            <></>
                                    }
                                </div>
                            </Col>
                        </Row>    
                    )
                }
            </Row>
        </PageContainer>
    );
};