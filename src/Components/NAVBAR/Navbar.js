import React from 'react'

import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar conatiner">
            <div className="logo">COINPULSE</div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Market</a></li>
                <li><a href="">Choose Us</a></li>
                <li><a href="">Join</a></li>
            </ul>
        </div>
    )
}

export default Navbar