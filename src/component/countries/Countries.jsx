import React, { use } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <>
            <h2 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>All Countries {countries.length}</h2>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
            </div>
        </>
    );
};

export default Countries;
