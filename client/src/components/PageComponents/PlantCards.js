import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router';

export default function PlantCards(props) {
    const {name} = props.plant.plantable
    const {id, description} = props.plant

    const navigate = useNavigate() 

    const routeChange = () => {
        navigate(`/plants/${id}`)
      
    }


    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img alt="plant-img" variant="top" src="https://gilmour.com/wp-content/uploads/2018/03/hydrangea-care.jpg" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text> {description}</Card.Text>
                <Button variant="info" onClick={routeChange}>Info</Button>
            </Card.Body>
        </Card>
    )
}
