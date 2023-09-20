import React from 'react'
import Card from './Card';
import "./CardSection.css"

import img1 from "../../CRYPTO ASSESTS/asset 0.png"
import img2 from "../../CRYPTO ASSESTS/asset 1.png"
import img3 from "../../CRYPTO ASSESTS/bnb-icon2_2x.webp"
import img4 from "../../CRYPTO ASSESTS/USD_Coin_icon.webp"


const CardSection = () => {
    return (
        <div className="container">
            <Card img={img1} title={"Bitcoin"} price={"$ 30,000.00"} />
            <Card img={img2} title={"Etherum"} price={"$ 1908.18"} />
            <Card img={img3} title={"Cardona"} price={"$ 0.32"} />
            <Card img={img4} title={"USD Coin"} price={"$ 1.00"} />
        </div>
    );
}

export default CardSection