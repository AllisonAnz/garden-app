import React from 'react'
import { Nav, Navbar, Offcanvas, Container, Button, NavDropdown, Form, FormControl } from "react-bootstrap";


export default function Sidebar({setUser}) {
    function handleLogoutClick(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/logout", requestOptions)
            .then(response => response.json())
            .then(setUser(null))
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <Navbar bg="light" expand={false} >
                <Container fluid>
                    <Navbar.Brand href="#">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="/newplant">New Plant</Nav.Link>
                                <NavDropdown title="My Plants" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="/plants">All Plants</NavDropdown.Item>
                                    <NavDropdown.Item href="/gardenplants">Garden Plants</NavDropdown.Item>
                                    <NavDropdown.Item href="/veggieplants">Vegetable Plants</NavDropdown.Item>
                                    <NavDropdown.Item href="/houseplants">House Plants</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Button onClick={handleLogoutClick} >Logout</Button>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    )
}
