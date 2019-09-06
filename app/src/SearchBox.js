import React from 'react';


const SearchBox = ({searchChange}) => {
    
    return (
        <div className="db mt2">
            <input type="search" className="pa4" placeholder="Type a name to filter" onChange={searchChange}></input>
        </div>
    )
}

export default SearchBox;