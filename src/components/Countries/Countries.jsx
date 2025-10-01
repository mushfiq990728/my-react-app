import React, { use, useState } from 'react';
import Countri from '../countries-another/Countri';
import './Countries.css'

const Country = ({countriesPromise}) => {
    const [visitedCountries , setVisitedCountries]= useState([])

    const [visitedFlags , setVisitedFlags] = useState([])

    const handleVisitedCountries = (country)=>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) =>{
        const newVisitedFlag = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlag)
    }


    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countriesPromise)
    return (
        <div className=''>
            <h1>All countries: {countries.length}</h1>
            <h3>Total countries visited: {visitedCountries.length} </h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
           <div className='countries'>
             {
                countries.map(country =><Countri key={country.cca3.cca3} country={country} handleVisitedCountries = {handleVisitedCountries} handleVisitedFlags = {handleVisitedFlags}></Countri>)
            }
           </div>
        </div>
    );
};

export default Country;