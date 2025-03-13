import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './components/CarritodeCompra';
import Prueba from './components/Producto';
import Formulario from './components/Formulario';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
        <Route path="/producto" element={<Prueba/>}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/formulario" element={<Formulario />}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
