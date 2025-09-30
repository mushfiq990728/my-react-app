import React, { use, useState } from 'react';
import Countri from '../countries-another/Countri';
import './Countries.css'

const Country = ({countriesPromise}) => {
    const [visitedCountries , setVisitedCountries]= useState([])

    const handleVisitedCountries = (country)=>{

    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countriesPromise)
    return (
        <div className=''>
            <h1>All countries: {countries.length}</h1>
            <h3>Total countries visited: {visitedCountries.length} </h3>
           <div className='countries'>
             {
                countries.map(country =><Countri key={country.cca3.cca3} country={country} handleVisitedCountries = {handleVisitedCountries}></Countri>)
            }
           </div>
        </div>
    );
};

export default Country;