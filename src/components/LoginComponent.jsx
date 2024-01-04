import React,{ useState } from 'react'
import { RegisterAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";


export default function LoginComponent() {
    const [credentials, setCredentials] =useState({});
    const login = () => {
        try{
            let res =  RegisterAPI(credentials.email, credentials.password)
        } catch(err){}

    };

    return ( 
    <div className = "login-wrapper">
        <h1>Task Tango</h1>
        <h3>For everone that do not have a use for linkedIn</h3>
        <div className ="auth-inputs">     
            <input 
                onChange ={(event) =>
                setCredentials({...credentials,email: event.target.value})
                }
                className ='commen-input' 
                placeholder='enter your email'
            /> 
            <input 
                onChange={(event)=>
                setCredentials({...credentials,password: event.target.value})
                }  
                className ='commen-input' 
                placeholder='enter your password'
            /> 
        </div>  
        <button onClick={login} className="login-btn"> 
         Log in to TaskTango
        </button>
    </div>
 )
}
