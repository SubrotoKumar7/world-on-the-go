import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const [visitCountries, setVisitCountries] = useState([]);
    const handleVisitCountries = (country) => {
        const newVisitedCountries = [...visitCountries, country];
        setVisitCountries(newVisitedCountries);
        console.log(newVisitedCountries);
    }

    const [visitCountryFlag, setVisitCountryFlag] = useState([]);
    const hanldeFlag = (country) => {
        const newFlag = [...visitCountryFlag, country];
        setVisitCountryFlag(newFlag);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <>
            <h2 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>Total Countries Number {countries.length}</h2>
            <h2>Visited countries: {visitCountries.length}</h2>
            <ol>
                {
                    visitCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='flag-container'>
                {
                    visitCountryFlag.map(flag => <img key={flag.cca3.cca3} src={flag.flags.flags.png} alt={flag.flags.flags.alt} />)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitCountries={handleVisitCountries} hanldeFlag={hanldeFlag}></Country>)
            }
            </div>
        </>
    );
};

export default Countries;
