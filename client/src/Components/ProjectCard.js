import React from "react"
import { Card } from "react-bootstrap";

export default function ProjectCard({name, description, src}) {
    return (
        <Card>
            <Card.Img style={{height: "175px", background: `url('${src}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};