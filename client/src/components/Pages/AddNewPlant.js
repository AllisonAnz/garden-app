import React from "react";
import Button from "react-bootstrap/Button";
import { useState} from "react";
import PlantCards from "../PageComponents/PlantCards";


export const AddNewPlant = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [active, setActive] = useState(true);
    //const [errors, setErrors] = useState([]);

    

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            name, 
            plantable_type: type
        }
        fetch("/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            if (r.ok) {
                r.json().then((plant) => {
                    setName("");
                    setType("");
                });
            } else {
                r.json().then((error) => console.log(error));
            }
        });
    }

   
    return (
        <>
        
            <h1>Add New Plant</h1>
        <div className="container" >
            <div class="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={() => setActive(!active)} id="inlineRadio1" value="Garden"/>
                <label class="form-check-label" for="inlineRadio1">Garden</label>
            </div>
            <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" onChange={() => console.log("veggie clicked")} id="inlineRadio2" value="Veggie"/>
                <label class ="form-check-label" for="inlineRadio2">Veggie</label>
            </div>
            <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" onChange={() => console.log("house clicked")} id="inlineRadio3" value="House"/>
                <label class ="form-check-label" for="inlineRadio3">House</label>
            </div>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="mb-3">
                    <label for="name" className="form-label">Plant Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Plant Name" />
                </div>
                <div className="mb-3">
                    <label for="type" className="form-label">Plant Type</label>
                    <input type="text" className="form-control" id="plant_type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                </div>
                <div className="col text-center">
                    <Button variant="info" type="submit">Add Plant</Button>
                </div>
            </div>
        </form>
                <div hidden={active}>hidden component</div>
        </div>
        </>
    );
};

