import React, { useState } from "react";
import { Row, Col, Modal, Button, Image} from "react-bootstrap";
import { FaCode, FaInternetExplorer} from "react-icons/fa"
import PageContainer from "../Components/PageContainer";
import ProjectCard from "../Components/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import projects from "../utils/projects";


export default function Portfolio() {

    const [modalProject, setModalProject] = useState({
        name: "HALP",
        description: "Ticket Management System",
        gitlink: "", 
        weblink: "", 
        src: "./Images/halp.PNG ",
        languages: "",
    });
    
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const handleProjectClick = (project) => {
        setModalProject(project);
        setShowModal(true);
    };

    return (
        <PageContainer>
            <Row className="justify-content-center align-items-center">
                {
                    projects.map(project =>
                        <Col key={uuidv4()} xs={12} md={6} lg={3} className="card-column"
                        onClick={() => handleProjectClick(project)} style={{padding: "10px"}} >
                            <ProjectCard name={project.name} 
                                description={project.description} 
                                src={project.src}
                            />
                        </Col>
                    )
                }
            </Row>

            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header>
                    <Modal.Title>{modalProject.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={modalProject.src} alt="project preview" fluid />
                    {modalProject.description}
                </Modal.Body>
                <Modal.Body>
                    {modalProject.languages}
                </Modal.Body>
                <Modal.Footer>
                    <a href={modalProject.gitlink} rel="noopener noreferrer" target="_blank" style={{position: "absolute", left: "5px"}}>
                        <Button variant="secondary" onClick={closeModal}>
                            <FaCode />
                        </Button>
                    </a>
                    <a href={modalProject.weblink} rel="noopener noreferrer" target="_blank">
                        <Button variant="primary" onClick={closeModal}>
                            <FaInternetExplorer />    
                        </Button>
                    </a>

                </Modal.Footer>
            </Modal>
        </PageContainer>
    );
};