import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputNumbers() {
  const {
    setComparison,
    setColumnFilter,
    setValue,
    onClickButton,
    value,
    columnList,
  } = useContext(MyContext);

  return (
    <div>
      <select
        name="select"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        {columnList.map((column, index) => (
          <option
            key={ index }
            value={ column }
          >
            { column }
          </option>
        ))}

      </select>

      <select
        name="select"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="input"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickButton }
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputNumbers;
