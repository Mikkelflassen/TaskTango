import React from 'react'
import { LoginAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";


export default function LoginComponent() {
    const login = () => {
        let res = LoginAPI();
        console.log(res)
    };
    return ( 
    <div>
        <h1>Task Tango</h1>
        <h3>For everone that do not have a use for linkedIn</h3>
        <button onClick={login} className="login-btn"> 
         Log in to TaskTango
        </button>
    </div>
 )
}
