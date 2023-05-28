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
    </div>
  )
}