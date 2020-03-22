import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';



export const Header = () => {

    return (
        <header className="header">
            <NavLink exact to="/">Homepage</NavLink>
            <NavLink to="/cart">Shop-Cart</NavLink>
            <NavLink to="/fav">Favourites</NavLink>

        </header>
    )
}