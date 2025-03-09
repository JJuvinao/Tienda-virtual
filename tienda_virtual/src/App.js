import './App.css';
import Estado from './components/Estado';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pagina from './components/Pagina';
import Carrito from './components/CarritodeCompra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagina/>}/>
        <Route path="/carrito" element={<Pagina />}/>
        <Route path="/estado" element={<Pagina />}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
