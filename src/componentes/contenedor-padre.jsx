// ContenedorPadre.jsx
import React, { useState, useEffect } from "react";
import { InputNumber } from "./input-number";
import { InputRange } from "./input-range";
import { InputWebs } from "./input-webs";
import  { ResultComponent }  from "./resultComponent.jsx";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
});

export function ContenedorPadre() {

  const [valorNumber, setValorNumber] = useState(0);
  const [valorRange, setValorRange] = useState(1000);
  const [valorWebs, setValorWebs] = useState(1);

  const handleNumberChange = (e) => {
    const valor = parseFloat(e.target.value);
    setValorNumber(valor);
  };

  const handleRangeChange = (e) => {
    const valor = parseInt(e.target.value);
    setValorRange(valor);
  };

  const handleWebsChange = (e) => {
    const valor = parseInt(e.target.value);
    setValorWebs(valor);
  }

  return (
    <div className={`contenedor__padre ${nunito.className}`}>
      <div className="contenedor__padre__result">
        <ResultComponent 
          valorNumber={valorNumber} 
          valorRange={valorRange}
          valorWebs={valorWebs}
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

        <InputWebs
          valorSeleccionado={valorWebs}
          handleValorWebs={handleWebsChange}
        />
      </div>
    </div>
  );
}







