import "./styles.css";
import Producto from "./Producto";
import Carrito from "./CarritodeCompra";
import { Link } from "react-router-dom";

export default function Pagina({Render, mensaje}) {

  const handleSeleccion = (nuevaSeleccion) => {
    PasarPagina(nuevaSeleccion);
  };

  const reiniciarPagina = () => {
    PasarPagina("prueba"); // Actualiza el estado para volver a renderizar Prueba
  };

  return (
    <>
      <Header onReiniciar={reiniciarPagina} />
      <Nav />
      {mensaje && <Compra />}
      <br></br>
      {<Render />}
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

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link className="nav-item"  to={"/carrito"}>
          Categorias
        </Link>
        <Link className="nav-item" to={"/formulario"}>
          Carrito de compra - prueba
        </Link>
        <Link className="nav-item" to={"/estado"}>
          Buscar- estado
        </Link>
      </ul>
    </nav>
  );
}

function PasarPagina({ seleccion}) {
  let contenido;

  switch (seleccion) {
    case "categorias":
      
      break;
    case "carrito":
      
      break;
    case "estado":
      
      break;
    case "prueba":
    default:
      contenido = <Producto />;
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
