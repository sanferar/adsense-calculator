// ContenedorPadre.jsx
import React, { useState, useEffect } from "react";
import { InputNumber } from "./input-number";
import { InputRange } from "./input-range";
import  { ResultComponent }  from "./resultComponent.jsx";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
});

export function ContenedorPadre() {

  const [valorNumber, setValorNumber] = useState(0);
  const [valorRange, setValorRange] = useState(1000);

  const handleNumberChange = (event) => {
    const valor = parseFloat(event.target.value);
    setValorNumber(valor);
  };

  const handleRangeChange = (event) => {
    const valor = parseInt(event.target.value);
    setValorRange(valor);
  };

  return (
    <div className={`contenedor__padre ${nunito.className}`}>
      <div className="contenedor__padre__result">
        <ResultComponent 
          valorNumber={valorNumber} 
          valorRange={valorRange} 
        />
      </div>
      <div className="contenedor__padre__inputs">
        <InputNumber 
        valorSeleccionado={valorNumber} 
        handleValorChange={handleNumberChange} 
        />
        <InputRange 
        valorSeleccionado={valorRange} 
        handleValorChange={handleRangeChange} 
        />
      </div>
    </div>
  );
}







