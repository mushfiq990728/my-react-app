import React, { useState } from 'react';
import './country.css'

const Countri = ({country, handleVisitedCountries}) => {
    
    const [visited,setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(visited ? false : true)
        handleVisitedCountries(country)
    }
    return (
        <div className= {`country ${visited && 'country-visited'}`}> 
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big country" : "Small Country"}</p>

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Countri;