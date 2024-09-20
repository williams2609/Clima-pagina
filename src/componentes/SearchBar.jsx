import React, { useState } from 'react'
import '../estilos/searchBar.css'


function SearchBar({TransformCity}) {

    const [city,setCity] = useState("")

const handleChange = ()=>{
    if(city.trim()){
        TransformCity(city)
        setCity("")
    }
}
console.log(city)

const handleKeyDown =(e)=>{
  if(e.key === "Enter"){
    e.preventDefault()
    handleChange()
  }
  
}

  return (
    <div className='container contenedor-principal d-flex justify-content-center'>
        <div className='col-12 contenedor-input d-flex alig-items-center justify-content-center'>
            <input className='col-md-8 input-busqueda'
            type="text"
            onChange={(e)=>{setCity(e.target.value)}}
            placeholder='Ingresa Tu Pais O Ciudad'
            value={city}
            onKeyDown={handleKeyDown}
            />
        </div>
      <div className='col-12 d-flex justify-content-center align-items-center'>
        <button className='col-md-5 boton-input btn' onClick={handleChange}>Buscar..</button>
      </div>
    </div>
  )
}

export default SearchBar