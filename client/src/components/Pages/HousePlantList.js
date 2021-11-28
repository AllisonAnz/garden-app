import React from "react";
import { useEffect, useState } from "react";


import PlantCards from "../PageComponents/PlantCards";


export const HousePlantList = () => {
    const [housePlants, setHousePlants] = useState([])
    const plantApi = '/plants'


    useEffect(() => {

        fetch(plantApi)
            .then(response => response.json())
            .then(plants => plants.map(plant => {
                if (plant.plantable_type === "HousePlant") {
                    setHousePlants(prevHousePlants => [...prevHousePlants, plant])
                }
                return plant
            }))
            .catch(error => console.log('error', error));
    }, [])



    return (
        <div>
            <h1>House Plants</h1>
            <div className="container" >
                <div className="card-columns">
                    {housePlants.map((plant) => {
                        return <PlantCards key={plant.id} plant={plant} />
                    })}


                </div>

            </div>
        </div>
    );
};
