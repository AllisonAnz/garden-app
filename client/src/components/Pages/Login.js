import React from "react";

export const Login = () => {
    return (
        <>
            <br />
            <div className="login-container">
                <div className="container-sm">
                    <form>
                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
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