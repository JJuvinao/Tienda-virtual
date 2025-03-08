import { useState } from "react";
import "./styles.css";
import Prueba from "./Prueba";

export default function Pagina() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleCompra = () => {
    setMostrarMensaje(true);
    setTimeout(() => setMostrarMensaje(false), 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <>
      <Header />
      <Nav />
      {mostrarMensaje && <Compra />}
      <br></br>
      <Main onCompra={handleCompra} />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Mi Tienda</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Categorias</a>
        </li>

        <li className="nav-item">
          <a href="#products">Carrito de compra - prueba</a>
        </li>

        <li className="nav-item">
          <a href="#contact">Buscar- estado</a>
        </li>
      </ul>
    </nav>
  );
}

function Main({ onCompra }) {
  return (
    <main className="main">
      <Prueba onCompra={onCompra} />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © 2025 Mi Tienda. Todos los derechos reservados.
      </p>
    </footer>
  );
}

function Compra() {
  return <h2 className="carrito">Agregado al carrito de compra</h2>;
}
