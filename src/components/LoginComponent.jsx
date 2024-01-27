import React,{ useState } from 'react'
import { LoginAPI } from "../api/AuthAPI";
import TaskTango from '../assets/TaskTangoLOGO.png';
import "../Sass/LoginComponent.scss";


export default function LoginComponent() {
    const [credentials, setCredentials] =useState({});
    const login = async () => {
        try{
            let res =  await LoginAPI(credentials.email, credentials.password)
            console.log(res?.user);
        } catch(err){
        console.log(err);
        }
    };

    return ( 
    <div className = "login-wrapper">
        <img src={TaskTango} className='TaskTango'/>
        
        <h1 className="heading"> Sign in</h1>
        <p className="sub-heading">Stay updated on jobs you can do on the side</p>
        <div className ="auth-inputs">     
            <input 
                onChange ={(event) =>
                setCredentials({...credentials,email: event.target.value})
                }
                className ='commen-input' 
                placeholder='Email or phone'
            /> 
            <input 
                onChange={(event)=>
                setCredentials({...credentials,password: event.target.value})
                }  
                className ='commen-input' 
                placeholder='Password'
            /> 
            <p className="forgot-password">
  <a href="https://mikkelflassen.com/">Forgot Password?</a>
</p>
        </div>  
        
        <button onClick={login} className="login-btn"> 
         Sign in
        </button>
    </div>
 )
}
