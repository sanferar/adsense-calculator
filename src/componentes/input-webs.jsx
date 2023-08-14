import React from "react"

export function InputWebs({valorSeleccionado, handleValorWebs}){
  return(
    <>
    <p>{valorSeleccionado} Webs con publicidad</p>
      <input 
        className='slider'
        type="range"
        min="1"
        max="300"
        step="1"
        value={valorSeleccionado}
        onChange={handleValorWebs}
      />
    </>
  )
}