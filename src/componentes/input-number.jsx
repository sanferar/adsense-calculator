import React from "react";


export function InputNumber({ valorSeleccionado, handleValorChange }) {
  return (
    <>
      <input
        className='slider'
        type="range"
        min="0.001"
        max="14"
        step="0.001"
        value={valorSeleccionado}
        onChange={handleValorChange}
      />
      <p>RPM: {valorSeleccionado}€</p>
    </>
  );
}




