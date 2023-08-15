import React from "react";

export function InputNumber({ valorSeleccionado, handleValorChange }) {
  return (
    <>
      <p>RPM: {valorSeleccionado}€</p>
      <input
        className='slider'
        type="range"
        min="0"
        max="2"
        step="0.2"
        value={valorSeleccionado}
        onChange={handleValorChange}
      />
    </>
  );
}




