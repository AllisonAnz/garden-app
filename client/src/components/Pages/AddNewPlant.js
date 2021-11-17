import React from "react";
import Button from "react-bootstrap/Button";

export const AddNewPlant = () => {
    return (
        <div>
            <h1>Add New Plant</h1>
            <div className="container">
                <div className="mb-3">
                    <label for="img" className="form-label">Example label</label>
                    <input type="text" className="form-control" id="plantname" placeholder="Plant Name" />
                </div>
                <div className="mb-3">
                    <label for="img" className="form-label">Image</label>
                    <input type="text" className="form-control" id="image" placeholder="Image" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                </div>
                <div className="col text-center">
                    <Button variant="info">Add Plant</Button>
                </div>
            </div>
        </div>
    );
};