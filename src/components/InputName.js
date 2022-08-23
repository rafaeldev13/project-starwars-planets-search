import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Input() {
  const { filters, setFilters } = useContext(MyContext);

  const { name } = filters.filterByName;

  const handleInputName = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ name }
      onChange={ handleInputName }
      placeholder="Write the name of the planet"
    />

  );
}

export default Input;
