import './App.css';
import Estado from './components/Estado';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Prueba from './components/Prueba';
import Pagina from './components/Pagina';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Prueba />}/>
        <Route path="/carrito" element={<Pagina />}/>
        <Route path="/estado" element={<Estado />}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
