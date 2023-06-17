// InputRange.jsx
import React from "react";



export function InputRange({ valorSeleccionado, handleValorChange }) {
  return (
    <>
      <p>{valorSeleccionado.toLocaleString()} Impresiones</p>
      <input
        className="slider"
        type="range"
        min="1000"
        max="100000"
        step='1000'
        value={valorSeleccionado}
        onChange={handleValorChange}
      />
    </>
  );
}




