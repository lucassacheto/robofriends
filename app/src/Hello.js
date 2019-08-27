import React from 'react';

const Hello = ( {userPosition} ) => { 
    return (
        <div className="f2 tc code">
            <h1>Robot Friends</h1>
            <cite>{userPosition} </cite>
        </div>
    );
};

export default Hello