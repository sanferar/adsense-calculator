import React, { useState, useEffect } from "react";

export function ResultComponent({valorNumber, valorRange}){

    const [resultado, setResultado] = useState(0);
    
    useEffect(() => {
      const calcularResultado = () => {
        const resultado = valorNumber * (valorRange/1000);
        const resultadoPuntuado = resultado.toLocaleString()
        setResultado(resultadoPuntuado);
      };
    
      calcularResultado();
    }, [valorNumber, valorRange]);
    
    return (
      <div className="contenedor__resultado">
        <p className="contenedor__resultado__label" >Resultado
        </p>
        <div className="contenedor__resultado__cifraysimbolo">
          <p className="cifra__resultado">
          {resultado}
          </p>
          <p className="simbolo__resultado">€</p>
        </div>
      </div>
    );

}