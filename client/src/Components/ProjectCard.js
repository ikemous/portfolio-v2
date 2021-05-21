import React from "react"
import { Card } from "react-bootstrap";

export default function ProjectCard({name, description, src}) {
    return (
        <Card>
            <Card.Img style={{height: "175px"}} variant="top" src={src} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};