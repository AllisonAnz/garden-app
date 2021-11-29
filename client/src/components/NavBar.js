import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavigationBar() {
    return (
        <Navbar className="navbar" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Garden Planner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/dashboard">My Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavigationBar;