// InputRange.jsx
import React from "react";



export function InputRange({ valorSeleccionado, handleValorChange }) {
  return (
    <>
      <p>Impresiones: {valorSeleccionado.toLocaleString()} Impresiones</p>
      <input
        className="slider"
        type="range"
        min="1"
        max="10000000"
        step='100'
        value={valorSeleccionado}
        onChange={handleValorChange}
      />
    </>
  );
}




