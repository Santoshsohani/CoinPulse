import React from 'react'

const Card = ({img,title,price}) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="title">{title}</div>
            <div className="title">{price}</div>
        </div>
    );
}

export default Card