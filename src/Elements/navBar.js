import React from 'react';
import "./stylesheels/Navbar.css";

export function NavBar(){
    return(
        <div className='nav'>
            <div className='navLogo'>
                <img src="imagenes/logo.jpg" alt="Logo" />
            </div>
            <ul className='navList'>
                <li>Equipos</li>
                <li>Competiciones</li>
                <li>Reglamentos</li>
                <li>Contactos</li>
            </ul>
        </div>
    );
}
