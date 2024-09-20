import React from 'react'
import WeatherInfo from './WeatherInfo'
import { useMyContext } from './WeatherProvider'


function PaginaPrincipal() {

const {error,setError,TransformCity,position,setPosition, data,setData,city,setCity} = useMyContext()

  return (
    <div>
<WeatherInfo error={error} setError={setError} 
TransformCity={TransformCity} position={position} setPosition={setPosition}
data={data} setData={setData} city={city} setCity={setCity}/>
    </div>
  )
}

export default PaginaPrincipal