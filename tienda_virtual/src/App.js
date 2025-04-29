import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './componentsApi/Inicio';
import ApiLogin from './componentsApi/Apilogin';
import Apiregistro from './componentsApi/Apiregistro';
import Apiclase from './componentsApi/Apiclase';
import MenuPrincipal from './componentsApi/MenuPrincipal';
import Clases from './componentsApi/Clase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<ApiLogin/>}/>
        <Route path="/registro" element={<Apiregistro />}/>
        <Route path="/crearclase" element={<Apiclase />}/>
        <Route path="/menu" element={<MenuPrincipal/>}/>
        <Route path="/clase" element={<Clases/>}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
