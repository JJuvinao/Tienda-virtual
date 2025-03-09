import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Prueba from "./Prueba";
import Carrito from "./CarritodeCompra";

export default function Pagina() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [seleccion, setSeleccion] = useState("prueba");

  const mensajedecompra = () => {
    setMostrarMensaje(true);
    setTimeout(() => setMostrarMensaje(false), 3000); // Oculta el mensaje después de 3 segundos
  };

  const handleSeleccion = (nuevaSeleccion) => {
    setSeleccion(nuevaSeleccion);
  };

  const reiniciarPagina = () => {
    setSeleccion("prueba"); // Actualiza el estado para volver a renderizar Prueba
  };

  return (
    <>
      <Header onReiniciar={reiniciarPagina} />
      <Nav onSeleccion={handleSeleccion} />
      {mostrarMensaje && <Compra />}
      <br></br>
      <VistaMain seleccion={seleccion} onCompra={mensajedecompra} />
      <Footer />
    </>
  );
}

function Header({ onReiniciar }) {
  return (
    <header className="header">
      <button className="header-title no-border" onClick={onReiniciar}>
        <h1>Mi Tienda</h1>
      </button>
    </header>
  );
}

function Nav({ onSeleccion }) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item" onClick={() => onSeleccion("categorias")}>
          Categorias
        </li>
        <li className="nav-item" onClick={() => onSeleccion("carrito")}>
          Carrito de compra - prueba
        </li>
        <li className="nav-item" onClick={() => onSeleccion("estado")}>
          Buscar- estado
        </li>
      </ul>
    </nav>
  );
}

function VistaMain({ seleccion, onCompra }) {
  let contenido;

  switch (seleccion) {
    case "categorias":
      contenido = <Categorias />;
      break;
    case "carrito":
      contenido = <BtnCarrito />;
      break;
    case "estado":
      contenido = <Estado />;
      break;
    case "prueba":
    default:
      contenido = <Prueba onCompra={onCompra} />;
  }

  return <main className="main">{contenido}</main>;
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

function Categorias() {
  return <div>Categorías</div>;
}

function BtnCarrito() {
  return (
    <>
      <Carrito />
    </>
  );
}

function Estado() {
  return <div>Estado</div>;
}


