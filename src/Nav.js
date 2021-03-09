import React from 'react'
import './Nav.css';
import {BrowerRouter as Router, Route}from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm'
function Nav() {
    return (
        <div className="nav">
            <img
                className="Logo"
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                alt="Netflix Logo"
            />
            <img 
                className="profile_img"
                src="https://occ-0-3537-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                alt="Netflix profile"
             />
                         <LoginForm />

        </div>
    )
}

export default Nav
