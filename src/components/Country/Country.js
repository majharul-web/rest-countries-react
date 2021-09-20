import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, flag, population } = props.country;
  // console.log(props.country);
  return (
    <div className='country'>
      <h4>Country Name:{name}</h4>
      <p>Capital:{capital}</p>
      <h6>Population:{population}</h6>
      <img src={flag} alt='' />
    </div>
  );
};

export default Country;
