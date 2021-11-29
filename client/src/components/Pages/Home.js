import React from "react";
import { Login } from "./Login"
//import { useEffect, useState } from "react";
//import Sidebar from "../PageComponents/Sidebar"
//import { useEffect} from "react";

export const Home = ({ setUser }) => {
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-4">
                    <div className="homepage-description">
                        <img className="center" alt="Bootstrap Preview" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnfNcPe50tdz66SrzuUFrl0l9IsvDdo5ybg&usqp=CAU" /><br />
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>

                    </div>
                </div>
                <div className="col-md-8">
                    <Login onLogin={setUser} />
                </div>
            </div>
        </div>


    );
};