import React,{ useState } from 'react'
import { LoginAPI } from "../api/AuthAPI";
import TaskTango from '../assets/TaskTango.png';
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
        
        <h1 className="heading"> Signin</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
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
             <p className ="forgotPassword"> Forgot Password?</p>
        </div>  
        
        <button onClick={login} className="login-btn"> 
         Log in to TaskTango
        </button>
    </div>
 )
}
