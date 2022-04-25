import React from 'react';
import "./stylesheels/Navbar.css";
import logo from "./imagenes/playon.png";

export function NavBar(){
    return(
        <div className='nav'>
            <div className="container90">

            <div className='navLogo'>
                <img src={logo} alt="Logo" width="100%" height="100%"/>
                <h3>PlayOn Frisbee</h3>
            </div>
            <ul className='navList'>
                <li>Equipos</li>
                <li>Competiciones</li>
                <li>Reglamentos</li>
                <li>Contactos</li>
            </ul>
            </div>
        </div>
    );
}
