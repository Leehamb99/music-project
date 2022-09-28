import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'


const Header = (props) => {

    const activeClass = (({isActive}) => isActive ? 'current' : undefined)


    
    return(
        <>
            <ul>
                <NavLink className={activeClass}to="/Joey" end>Joey</NavLink>
                <NavLink className={activeClass}to="/Kanye" end>Kanye</NavLink>
                <NavLink className={activeClass}to="/Nas" end>Nas</NavLink>


            </ul>
            
        </>
    )
    }

export default Header;

