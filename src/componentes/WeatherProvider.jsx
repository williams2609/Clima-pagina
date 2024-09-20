import {React , useState, createContext,useContext, useEffect} from 'react'

const MyContext = createContext()

export const WeatherProvider = ({children}) =>{

    const [error, setError] = useState(null);
    const [position, setPosition] = useState({ lat: null, lon: null });
    const [data, setData] = useState(null);
    const [city, setCity] = useState(""); // Estado para almacenar la ciudad

    const TransformCity = async (city) => {
        
        if (city) {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=4e447ab6159717dbce96e0ad73a93e0c`
            );
            if (!response.ok) {
              throw new Error(`HTTP Error status: ${response.status}`);
            }
    
            const data = await response.json();
            if (data.coord && data.coord.lat !== undefined && data.coord.lon !== undefined) {
              const { lat, lon } = data.coord;
              setPosition({ lat, lon });
            } else {
              setError("No se ha encontrado su país o estado");
            }
          } catch (error) {
            setError(error.message);
          }
        }
      };
      const apiFetch = async () => {
        if (position.lat !== null && position.lon !== null) {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&lang=es&appid=4e447ab6159717dbce96e0ad73a93e0c`
            );
            if (!response.ok) {
              throw new Error(`HTTP error status: ${response.status}`);
            }
            const data = await response.json();
            setData(data);
    
            // Llamada a la función de geocodificación inversa
            fetchCityFromCoords(position.lat, position.lon);
          } catch (error) {
            setError(error.message);
          }
        }
      };
       // Función para obtener la localización del usuario
  const autLocalizacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };
  

  // Geocodificación inversa para obtener el nombre de la ciudad
  const fetchCityFromCoords = async (lat, lon) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
      const data = await response.json();
      if (data && data.address) {
        setCity(data.address.city || data.address.state || "Unknown Location");
      } else {
        setError('No se encontró información de la ciudad.');
      }
    } catch (error) {
      setError(error.message);
    }
  };



  // Función para obtener los datos del clima
  

  useEffect(() => {
    autLocalizacion();
  }, []);

  useEffect(() => {
    if (position.lat !== null && position.lon !== null) {
      apiFetch();
    }
  }, [position]);

  return (
    <MyContext.Provider value={{error,setError,TransformCity,position,setPosition,setData,setCity,data,city}}>
        {children}
    </MyContext.Provider>
  )
}


export const useMyContext = () => useContext(MyContext);