import React, { useState } from 'react';
import './css/ApiCountry.css';


function ApiCountry() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


  const handleSearch = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!response.ok) {
        throw new Error('Country not found');
      }
      const data = await response.json();
      setCountryData(data[0]);
      setErrorMessage('');
    } catch (error) {
      setCountryData(null);
      setErrorMessage('Country not found');
    }
  };


  return (
    <div className="App">
      <h1>Country Search</h1>
      <input
        rel='data-input'
        type="text"
        placeholder="Enter country name"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button rel='button-country' onClick={handleSearch}>Search</button>
      {errorMessage && <p>{errorMessage}</p>}
      {countryData && (
        <div className="country-info">
          <h2 rel='Country-name'>{countryData.name.common}</h2>
          <p rel='Country-capital'><strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
          <p rel='Country-pop'><strong>Population:</strong> {countryData.population ? countryData.population.toLocaleString() : 'N/A'}</p>
          <p rel='Country-lang'><strong>Languages:</strong> {countryData.languages ? Object.values(countryData.languages).join(', ') : 'N/A'}</p>
        </div>
      )}

      <br />
      <div>
      <a className="link-home" href="/">Home</a>
      </div>
    </div>
  );
}


export default ApiCountry;
