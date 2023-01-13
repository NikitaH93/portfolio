import React from 'react'
import './navbar.css'
import bakeryLogo from '../../Assets/bakery.png'
const BakeryNavbar = () => {

    return (
        <nav className='n bakery-font'>
            <ul className='n-items'>
                <li>
                    <p className='nav-link'>About</p>
                </li>
                <li>
                    <p className='nav-link'>Cakes</p>
                </li>
                <li>
                    <img src={bakeryLogo} width={'100px'} height={'100px'}/>
                </li>
                <li>
                    <p className='nav-link'>Order</p>
                </li>
                <li>
                    <p className='nav-link'>Reviews</p>
                </li>
            </ul>
        </nav>
    );
}

export default BakeryNavbar;