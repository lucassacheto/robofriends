import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
   
    return (
        <div>
            {
                robots.map((robotList, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;

/* FIRST VERSION

const CardList = ({robots}) => {

    const cardArray = robots.map((robotList, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
            />
        )
    });

    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;

*/