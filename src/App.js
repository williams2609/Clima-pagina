
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { WeatherProvider } from './componentes/WeatherProvider';
import About from './componentes/About';
import Contactanos from './componentes/Contactanos';
import Login from './componentes/Login';
import Registro from './componentes/Registro';


function App() {
  return (
    <Router>
    <div className="App">     
      <Header/>
      <WeatherProvider>
   <Routes>
      <Route path='/map' element={<PaginaPrincipal/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contactanos/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registrate' element={<Registro/>}/>
    </Routes>
    </WeatherProvider>
    </div>
    </Router>
  );
}

export default App;
