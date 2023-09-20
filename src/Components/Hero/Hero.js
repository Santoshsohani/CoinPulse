import React from 'react'
import "./Hero.css"
import img1 from "../../CRYPTO ASSESTS/asset 0.png"
import img2 from "../../CRYPTO ASSESTS/asset 1.png"


const Hero = () => {
    return (
        <div className='container'>
            <div className="heading">
                <img src={img1} alt="" />
                <span> TRACK AND TRADE </span>
                <img src={img2} />
                <div className='text'> <span className='innerText'>CRYPTO</span> CURRIENCES </div>
            </div>
        </div>
    )
}

export default Hero