import React from "react";

const CounterApp = ({ valor }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <hr />
      <h3>Contador: {valor}</h3>
      <button className="btn btn-info mt-3 me-2">+1</button>
      <button className="btn btn-info mt-3">-1</button>
    </div>
  );
};

export default CounterApp;
