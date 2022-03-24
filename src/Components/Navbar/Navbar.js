import React from 'react';
import logo from '../../images/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nabar'>
            <nav className='header'>
                <div>
                    <img src={logo} alt="" />

                </div>
                <div className='links'>
                    <a href="/order">Order</a>
                    <a href="/orderReview">Order Review</a>
                    <a href="orderInventory">Order Inventory</a>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;