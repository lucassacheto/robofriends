import React from 'react';


const Card = ({name, id}) => {
    return (
        <div className="tc fl w-third mt5">
        <div className="ma2 dib tc b-blue bg-light-blue grow bw2 shadow-5">
            <h2>{name}</h2>
            <p>{id}</p>
            <img src={`https://robohash.org/${name}`} alt="" />    
        </div>
        </div>
    );

}

export default Card;