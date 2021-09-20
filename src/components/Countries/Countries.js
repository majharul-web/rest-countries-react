import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className='countries '>
      <h3>Total Country:{countries.length}</h3>
      <div className='country-container'>
        {countries.map((country) => (
          <Country key={country.alpha3Code} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
