import React from "react";
import { useState } from "react";

export function Login({onLogin})  {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/login", requestOptions)
            .then(response => response.json())
            .then((user) => onLogin(user))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <br />
            <div className="login-container">
                <div className="container-sm">
                    <form onSubmit={handleSubmit}>
                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" value={username} placeholder="Enter Username" onChange={(e)=> setUsername(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                        <p>Not a member?</p>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
                    </form>
                </div>
            </div>

        </>
    );
};