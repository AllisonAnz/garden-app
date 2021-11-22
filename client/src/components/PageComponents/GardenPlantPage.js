import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap'



export default function GardenPlantPage(props) {
    const [plants, setPlant] = useState([])
    const params = useParams()

    useEffect(() => {

        fetch(`/plants/${params.id}`)
            .then(response => response.json())
            .then(plants => setPlant(plants))
            .catch(error => console.log('error', error));
    }, [params.id])

    const { image, last_watered, last_fertilized, sun_requirement, description } = plants
    const { name, life_cycle, color, garden_location, height, planting_season, bloom_season, planted, days_to_germinate, days_to_bloom, notes } = plants.plantable

    return (
        <div>
            <div className="container" id="plant-section">
                <div className="row">
                    <div className="col-md-6">
                        <img className="image-responsive" alt="Plant" src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{name}</h1>
                            </div>
                        </div>
                        <dl className="row">
                            <dt className="col-sm-3">Life Cycle</dt>
                            <dd className="col-sm-9">{life_cycle}</dd>

                            <dt className="col-sm-3">Color</dt>
                            <dd className="col-sm-9">{color}</dd>

                            <dt className="col-sm-3">Last Watered</dt>
                            <dd className="col-sm-9">{last_watered}</dd>

                            <dt className="col-sm-3">Notes</dt>
                            <dd className="col-sm-9">{notes}</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center">
                    {description}
                </div>
            </div>

            <div className="container">
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
                    <Tab eventKey="Info" title="Planting Info">
                        <dl className="row">
                            <dt className="col-sm-3">Location</dt>
                            <dd className="col-sm-9">{garden_location}</dd>

                            <dt className="col-sm-3">Planted</dt>
                            <dd className="col-sm-9">{planted}</dd>

                            <dt className="col-sm-3">Days To Germinate</dt>
                            <dd className="col-sm-9">{days_to_germinate}</dd>

                            <dt className="col-sm-3">Days To Bloom</dt>
                            <dd className="col-sm-9">{days_to_bloom}</dd>

                            <dt className="col-sm-3">Last Fertilized</dt>
                            <dd className="col-sm-9">{last_fertilized}</dd>
                        </dl>
                    </Tab>
                    <Tab eventKey="profile" title="Plant Info">
                        <dl className="row">
                            <dt className="col-sm-3">Planting Season</dt>
                            <dd className="col-sm-9">{planting_season}</dd>

                            <dt className="col-sm-3">Bloom Season</dt>
                            <dd className="col-sm-9">{bloom_season}</dd>

                            <dt className="col-sm-3">Height</dt>
                            <dd className="col-sm-9">{height}</dd>

                            <dt className="col-sm-3">Sun Requirement</dt>
                            <dd className="col-sm-9">{sun_requirement}</dd>
                        </dl>
                    </Tab>

                    <Tab eventKey="contact" title="Contact" >
                        you did it!
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}

