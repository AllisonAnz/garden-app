import { useEffect, useState } from "react";

const [plants, setPlants] = useState([])
const [gardenplants, setGardenPlants] = useState([])
const [veggieplants, setVeggiePlants] = useState([])
const [houseplants, setHousePlants] = useState([])
const plantApi = '/plants'


useEffect(() => {

    fetch(plantApi)
        .then(response => response.json())
        .then(plants => plants.map(plant => {
            if (plant.plantable_type === "GardenPlant") {
                setGardenPlants(plant)
            }
            if (plant.plantable_type === "VeggiePlant") {
                setVeggiePlants(plant)
            }
            if (plant.plantable_type === "HousePlant") {
                setHousePlants(plant)
            }
            else {
                setPlants(plants)
            }
        }))
        .catch(error => console.log('error', error));
}, [])

//
export default function GardenPlantPage() {
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



import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap'



export default function GardenPlantPage() {
    const [plants, setPlant] = useState()
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

{
    "plantable_type": "GardenPlant",
        "description": "Odio iste et. Ab enim voluptatibus.",
            "plantable": {
        "name": "Sunflower",
            "life_cycle": "annual",
                "color": "orchid",
                    "garden_location": "front second from right",
                        "height": "3 inches",
                            "planting_season": "Feb-March",
                                "bloom_season": "July",
                                    "planted": "2021-02-15",
                                        "days_to_germinate": 10,
                                            "days_to_bloom": 35,
                                                "notes": "Testing Testing"
    }
}

// def create
//        #plant = GardenPlant.create!(plant_params)
//        plant = Plant.create!(plant_params)
//        render json: plant, status: : created
//  end

//def plant_params
    //params.permit(: description, : user_id, : plantable_id, : plantable_type)
//end

{
    "description": "Odio iste et. Ab enim voluptatibus.",
        "user_id": 1,
            "plantable_type": "GardenPlant",
                "plantable_id": 9
}

// plant = "garden"

// def create(name)
// if name === "garden"
//  GardenPlant.create(name: name)
//  elsif name === "veggie"
//   VeggiePlant.create(name: name)
// end 
// end

// create(plant)

// plant = "GardenPlant"
// create(plant)
//  def create(plantable_type)
//      if plantable_type === "GardenPlant"
//          plant_type = GardenPlant.create!(name: "gtest")
//       elsif plantable_type === "VeggiePlant"
//          veggie_type = VeggiePlant.create!(name: "vtest")
//        elsif plantable_type === "HousePlant"
//          plant_type = HousePlant.create!(name: "htest")
//      end
// end
// newplant = create(plant)

// plant = Plant.create(user_id: 1, plantable_id: new_plant.id, plantable_type: new_plant)
// planttest = Plant.new(user_id: 1, plantable_id: new_plant.id, plantable_type: new_plant)