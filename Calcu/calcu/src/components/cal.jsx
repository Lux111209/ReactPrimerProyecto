import React from "react";
import "../App.css";

const Cal = () => {
  return (
    <div className="calculator-container">
      <h2 className="title">Calculadora</h2>
      <div className="input-group">
        <label>Dato 1:</label>
        <input type="text" className="input-field" />
      </div>
      <div className="input-group">
        <label>Dato 2:</label>
        <input type="text" className="input-field" />
      </div>
      <button className="calculate-button">Calcular</button>
    </div>
  );
};

export default Cal;