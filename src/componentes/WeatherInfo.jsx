import React, {useEffect,} from 'react';
import '../estilos/weather.css';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Importar Leaflet
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';  // Importar el CSS de pantalla completa
import 'leaflet-fullscreen';  // Importar el complemento de pantalla completa
import SearchBar from './SearchBar';
import InfoClima from './InfoClima';


function WeatherInfo ({error,setError,TransformCity,position,setPosition,data,setData,city,setCity})  {
  
  
  const { BaseLayer, Overlay } = LayersControl;

 

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  
  const ChangeMapView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      if (center) {
        map.setView(center, 13);
      }
    }, [center, map]);
    return null;
  };

  const customIcon = L.divIcon({
    className: 'custom-icon',
    html: `<i class="bi bi-geo-alt-fill"></i>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const imagen = data.weather ? `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` : null;

  const WorldBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  return (


    <div className='contenedor-clima'>


   

      <SearchBar TransformCity={TransformCity} />

      <MapContainer
        className='container mapa'
        style={{ height: '400px', width: '100%', border: '3px solid rgba(63, 2, 185, 0.774)' }}
        center={[position.lat, position.lon]}
        zoom={3}
        minZoom={4}
        maxZoom={17}
        maxBounds={WorldBounds}
        maxBoundsViscosity={1.0}
        fullscreenControl={true}
      >
        <ChangeMapView center={[position.lat, position.lon]} />
        <LayersControl>
          <BaseLayer checked name="OpenStreetMap with Labels">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
          <Overlay name="Satellite Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
            />
          </Overlay>
          <Overlay name="Clouds">
            <TileLayer
              url="https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=4e447ab6159717dbce96e0ad73a93e0c"
              attribution='&copy; <a href="http://openweathermap.org/copyright">OpenWeatherMap</a>'
            />
          </Overlay>
          <Overlay name="Temperature">
            <TileLayer
              url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=4e447ab6159717dbce96e0ad73a93e0c"
              attribution='&copy; <a href="http://openweathermap.org/copyright">OpenWeatherMap</a>'
            />
          </Overlay>
        </LayersControl>

        <Marker position={[position.lat, position.lon]} icon={customIcon}>
          <Popup>
            {`Temperature: ${Math.round(data.main.temp - 273.15)}°C`}
            <br />
            {city && `City: ${city}`}
          </Popup>
        </Marker>
      </MapContainer>

      {/* Información del clima */}
      <InfoClima data={data} imagen={imagen} />
    </div>
  );
}

export default WeatherInfo;