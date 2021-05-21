import React from "react";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
    return (
        <Navbar expand="md">
            <Navbar.Toggle aria-controls="navigation" style={{boxShadow: 0, color: "purple"}}>
                <GiHamburgerMenu />
            </Navbar.Toggle>
            <Navbar.Collapse className="justify-content-end" id="navigation">
                <Navbar.Collapse className="mr-auto" style={{justifyContent: "inherit", fontSize: "1.25rem"}}>
                    <Nav>
                        <Nav.Link href="/" style={{color: "purple"}}>Home</Nav.Link>
                        <Nav.Link href="/portfolio" style={{color: "purple"}}>Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    );
};