import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(
    { filterByName: { name: '' } },
  );
  const [columnList, setColumnList] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const onClickButton = () => {
    const planetas = planets.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return (+planet[column]) > (+value);
      case 'menor que':
        return (+planet[column]) < (+value);
      case 'igual a':
        return (+planet[column]) === (+value);
      default:
        return false;
      }
    });
    setPlanets(planetas);
    setColumnList(columnList.filter((param) => param !== column));
  };

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
    setPlanets,
    setFilters,
    filters,
    setColumnFilter,
    setComparison,
    setValue,
    onClickButton,
    columnList,
    setColumnList,
    value,
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
