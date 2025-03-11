import './App.css';
import Estado from './components/Estado';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pagina from './components/Pagina';
import Carrito from './components/CarritodeCompra';
import Prueba from './components/Producto';
import Formulario from './components/Formulario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Prueba/>}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/formulario" element={<Formulario />}/>
        <Route path="/estado" element={<Estado />}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
