import React from "react";

function Loginform(){

    return (
        <div className="login">
        <div className="formHead">
            <h3>Login/Register</h3>
        </div>
            <form className="formLogin">
                <label htmlFor="username">
                    UserName:
                    <input type="text" id="username" placeholder="Username"></input>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" id="password" placeholder="Password"></input>

                </label>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    )
}

export default Loginform;