import React from 'react';
import '../estilos/infoDatos.css'; // Asegúrate de ajustar o agregar estilos personalizados aquí

function InfoClima({ imagen, data }) {
  if (!data) {
    return <p>No hay datos disponibles.</p>;
  }

  const { name, main, weather, wind, sys } = data;

  // Convertir la hora de salida y puesta del sol a formato legible
  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className='container contenedor-datos'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-8'>
          <div className="card text-center shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4>{name}</h4>
            </div>
            <div className="card-body">
              <img className='img-fluid' src={imagen} alt="Weather Icon" />
              <p className='mt-3'>{`Descripción: ${weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}`}</p>
              <p>{`Temperatura: ${Math.round(main.temp - 273.15)}°C`}</p>
              <p>{`Temperatura Máxima: ${Math.round(main.temp_max - 273.15)}°C`}</p>
              <p>{`Temperatura Mínima: ${Math.round(main.temp_min - 273.15)}°C`}</p>
              <p>{`Humedad: ${main.humidity}%`}</p>
              <p>{`Presión Atmosférica: ${main.pressure} hPa`}</p>
              <p>{`Velocidad del Viento: ${wind.speed} m/s`}</p>
              <p>{`Salida del Sol: ${sunrise}`}</p>
              <p>{`Puesta del Sol: ${sunset}`}</p>
            </div>
            <div className="card-footer text-muted">
              Información actualizada.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoClima;