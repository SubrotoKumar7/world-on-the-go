import React from 'react';
import './country.css';

const Country = ({country}) => {

    const handleVisit = () => {
        console.log('btn click');
    }

    // console.log(country);
    return (
        <div className="country">
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Population: {country.population.population}</p>
            <p>Continents {country?.continents.continents[0]}</p>
            <p>Area: {country.area.area} {country.area.area >= 342000 ? 'Big Country' : 'Small Country'}</p>
            <button onClick={handleVisit}>Want to Visit</button>
        </div>
    );
};

export default Country;
