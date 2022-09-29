import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    background-color: #404040;
    padding: 20px;
    margin-left: 5%;
    margin-right: 5%;
`;

const NavbarItem = styled.div`
    display: flex;
    justify-content: center;
    color: black;
    text-decoration-line: underline;
    width: 15vw;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #f48c15;
    border-radius: 20px;

`;

const Header = () => {

    const activeClass = (({isActive}) => isActive ? 'current' : undefined)


    
    return(
        <>

            <Navbar>

       <NavLink to="/Joey" ><NavbarItem> Joey </NavbarItem></NavLink> 
       <NavLink to="/Kanye" ><NavbarItem> Kanye </NavbarItem></NavLink>
       <NavLink to="/Nas" ><NavbarItem> Nas </NavbarItem></NavLink> 

            </Navbar>
        
            
        </>
    )
    };

export default Header;

