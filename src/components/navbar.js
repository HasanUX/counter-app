/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

//destructuring arguments in stateless func comp
const Navbar = ({count})  => {
    return (
        <nav className="navbar navbar-light bg-light mb-4">
            <a href="#" className="navbar-brand">Machbazaar Inventory
            </a>

            <p>Counter-app</p>

            <p className="nav-link font-weight-bold">Your inventory has {count} capacity counter(s)</p>
        </nav>
    );
}
 
export default Navbar;
 
