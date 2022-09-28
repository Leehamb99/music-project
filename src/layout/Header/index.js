import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {

    const activeClass = (({isActive}) => isActive ? 'current' : undefined)


    
    return(
        <>
            <ul>
                <NavLink className={activeClass}to="/Joey" >Joey</NavLink>
                <NavLink className={activeClass}to="/Kanye" >Kanye</NavLink>
                <NavLink className={activeClass}to="/Nas" >Nas</NavLink>
            </ul>
            
        </>
    )
    };

export default Header;

