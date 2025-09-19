import React, { useState } from 'react';
import './country.css';

const Country = ({country, handleVisitCountries, hanldeFlag}) => {
    // console.log(handleVisitCountries);

    const [visit, setVisit] = useState(false);

    const handleVisit = () => {
        // 1st way
        // if(visit){
        //     setVisit(false);
        // }else{
        //     setVisit(true);
        // }

        // 2nd way
        // setVisit(visit ? false : true);

        // 3rd way
        setVisit(!visit);
        handleVisitCountries(country);
    }

    const countryFlag = () => {
        hanldeFlag(country);
    }

    return (
        <div className={`country ${visit && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Population: {country.population.population}</p>
            <p>Continents {country?.continents.continents[0]}</p>
            <p>Area: {country.area.area} {country.area.area >= 342000 ? 'Big Country' : 'Small Country'}</p>
            <button onClick={handleVisit}>{visit ? "Visited" : "Not Visited"}</button>
            <button onClick={countryFlag}>Country Flag</button>
        </div>
    );
};

export default Country;
