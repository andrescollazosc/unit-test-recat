import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 100 }) => {
  const [counter, setCounter] = useState(value);

  // HandleAdd
  const handleAdd = (e) => {
    setCounter(counter + 1);
  };

  const resetValue = () => {
    setCounter(value);
  };

  const handleSubstract = (e) => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
