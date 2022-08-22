import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((planet) => delete planet.residents);
        setPlanets(data.results);
      });
  }, []);

  const infoPlanets = {
    planets,
  };

  return (
    <MyContext.Provider value={ infoPlanets }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.array,
}.isRequired;

export default MyProvider;
