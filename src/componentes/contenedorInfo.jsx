import React from "react";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  weight: '300',
  subsets: ['latin']
});


export function ContenedorInfo() {
  return (
    <div className={`contenedor__padre__info ${roboto.className}`}>
      <h2>
        Estimador de ganancias por mil impresiones con Adsense
      </h2>
      <p>Esta calculadora hace una estimación de los ingresos que podrías obtener en Adsense teniendo en cuenta tu RPM y las impresiones que crees que puedes llegar a conseguir.
      </p>
      <p> Fórmula: RPM * (impresiones/1000)</p>
      
    </div>
  )
}