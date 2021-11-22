import React from "react";
import { useEffect, useState } from "react";


import PlantCards from "../PageComponents/PlantCards";


export const GardenPlantList = () => {
    const [plants, setPlants] = useState([])
    const plantApi = '/plants'


    useEffect(() => {

        fetch(plantApi)
            .then(response => response.json())
            .then(plants => plants.map(plant => {
               if (plant.plantable_type === "GardenPlant"){
                    setPlants([...plants, plant])
               }
                
            }))
            .catch(error => console.log('error', error));
    }, [])



    return (
        <div>
            <h1>Garden Plants</h1>
            <div className="container" >
                <div className="card-columns">
                    {plants.map((plant) => {
                        return <PlantCards key={plant.id} plant={plant} />
                    })}


                </div>

            </div>
        </div>
    );
};
