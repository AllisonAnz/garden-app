import React from 'react'
//import { Container, Row, Col } from "react-bootstrap"
//import { Card, Form, Button } from "react-bootstrap";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";



export default function UserDashboard() {
    const [plants, setPlants] = useState([])
    const plantApi = '/plants'

    useEffect(() => {

        fetch(plantApi)
            .then(response => response.json())
            .then(plants => setPlants(plants))
            .catch(error => console.log('error', error));
    }, [])

    plants.map((plant) => {
        console.log(plant.plantable.name)
    })
    return (
        <div>
            <h1>Dashboard</h1>
            
            
        </div>
    )
}


