import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

export default function Pagina({Render, mensaje}) {

  return (
    <>
      <Header  />
      <Nav />
      {mensaje && <Compra />}
      <br></br>
      {<Render />}
      <Footer />
    </>
  );
}

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/producto");
  };
  
  return (
    <header className="header">
      <button className="header-title no-border" onClick={handleNavigate}>
        <h1>Mi Tienda</h1>
      </button>
    </header>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link className="nav-item"  to={"/formulario"}>
          Categorias
        </Link>
        <Link className="nav-item" to={"/carrito"}>
          Carrito de compra
        </Link>
        <Link className="nav-item" to={"/formulario"}>
          Agregar producto
        </Link>
        <Link className="nav-item" to={"/estado"}>
          Buscar
        </Link>
      </ul>
    </nav>
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
