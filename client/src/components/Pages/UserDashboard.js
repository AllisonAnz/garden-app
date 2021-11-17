import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
//import { Card, Form, Button } from "react-bootstrap";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../PageComponents/Sidebar";


export default function UserDashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <>
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <Sidebar />
                        </Col>
                        <Col xs={10} id="page-content-wrapper">

                            
                        </Col>
                    </Row>
                       
                </Container>
            </>
        </div>
    )
}
