import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PlantCards() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img alt="plant-img" variant="top" src="https://gilmour.com/wp-content/uploads/2018/03/hydrangea-care.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="info">Info</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
