import {React} from 'react';
import '../estilos/home.css'

import { useMyContext } from './WeatherProvider'
import { useNavigate } from 'react-router-dom';

function Home() {

  const {TransformCity,data,city,setCity} = useMyContext()

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleRegisterClick = () => {
    navigate('/map'); // Redirige a la página del mapa

  };
  const handleChange = ()=>{
    if(city.trim()){
      TransformCity(city)
        
    }
}
const main = data?.main;
const weather = data?.weather
const imagen = weather ? `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`: null

console.log(data)

const handleEnter = (e)=>{
  if (e.key === "Enter")
  { 
    e.preventDefault();
    handleChange();

  }
};

  return (
    <div className='contenedor-home'>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
        style={{
          height: '100vh',
          backgroundImage: "url('https://www2.teraz.sk/usercontent/photos/6/7/3/4-673391d93a7bc767af9ee85b5a224c92e8441b5b.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center">
          <h1 className="text-white display-3">Consulta el Clima en tu Ciudad</h1>
          <p className="lead text-white">Obtén información meteorológica precisa en cualquier parte del mundo.</p>
            <form className="d-flex form-inline justify-content-center mt-4 align-items-center ">
              <input className='input-home col-12 col-xs-6 col-md-6 col-xl-6'
              type='text'
              onChange={(e)=>{setCity(e.target.value)}}
              placeholder='Ingresa Tu Ciudad'
              onKeyDown={handleEnter}
              />
           </form>
          <button onClick={handleChange} className='col-7 col-xs-3 col-md-3 col-xl-3'>Ingresar</button>
        </div>
      </section>

   {weather && main &&(<section id="weather-info" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Clima Actual en <span id="city-name">{city}</span></h2>
          <div className="row justify-content-center text-align-center">
            <div className="col-md-4">
              <div className="card p-4 text-center shadow">
                <h3 className="card-title">{data.weather[0].description}</h3>
                <h4 className="display-4">{`${Math.round(main.temp - 273.15)}ºc`}</h4>
                <p>Humedad: {main.humidity}% | Viento: {data.wind.speed} km/h</p>
                <p><img src={imagen} alt="Weather Icon" className="img-fluid" /></p> 
              </div>
            </div>
          </div>
        </div>
      </section>)}

      {main && weather && (<section id="forecast" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Pronóstico Extendido</h2>
          <div className="row">
            {/* Repite este bloque para los días adicionales */}
            <div className="col-md-2 text-center">
              <div className="card p-3 d-flex justify-content-center">
                <h4 className="card-title">Lunes</h4>
                <p>{`Temperatura: ${Math.round(main.temp - 273.15)}ºC`}</p>
                <p>{`Temperatura Maxima: ${Math.round(main.temp_max - 273.15)}ºC`}</p>
                <p>{`Temperatura Mìnima: ${Math.round(main.temp_min - 273.15)}ºC`}</p>
                <p> <img src={imagen} alt="Weather Icon" className="img-fluid" /></p>

                <p>Despejado</p>
              </div>
            </div>
          </div>
        </div>
      </section>)}

      <section id="extra-info" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Consejos para tu Día según el Clima</h2>
        <div className="accordion" id="climateTips">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Consejos para Clima Soleado
                </button>
              </h5>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#climateTips">
              <div className="card-body">
                Usa protector solar y lentes de sol, y mantente hidratado durante el día.
              </div>
            </div>
          </div>

            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Consejos para Clima Lluvioso
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#climateTips">
                <div className="card-body">
                  No olvides llevar un paraguas y usa calzado resistente al agua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action" className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">¿Quieres estar al tanto del clima?</h2>
          <p className="lead">Suscríbete a nuestras alertas meteorológicas y nunca te tomará por sorpresa el mal clima.</p>
          <button className="btn btn-primary btn-lg">¡Regístrate ahora!</button>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>WeatherApp</h5>
              <p>Tu aplicación confiable para obtener pronósticos meteorológicos precisos.</p>
            </div>
            <div className="col-md-6 text-right">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" className="text-white">Política de Privacidad</a></li>
                <li className="list-inline-item"><a href="#" className="text-white">Términos de Uso</a></li>
                <li className="list-inline-item"><a href="#" className="text-white">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;