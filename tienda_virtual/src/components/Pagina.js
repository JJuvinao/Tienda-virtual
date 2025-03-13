import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Buscador from "./Bucardor";

export default function Pagina({ Render, mensaje, OnCategoryChange, onSearch }) {
  return (
    <>
      <Header />
      <Nav OnCategoryChange={OnCategoryChange} onSearch={onSearch} />
      {mensaje && <Compra />}
      <br></br>
      {<Render />}
      <Footer />
    </>
  );
}

export function Header() {
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

function Nav({ OnCategoryChange, onSearch }) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <details className="nav-item dropdown">
          <summary>Categorias</summary>
          <ul className="dropdown-menu">
            <li>
              <button onClick={() => OnCategoryChange("")}>All</button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("men's clothing")}>
                Men's clothing
              </button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("women's clothing")}>
                women's clothing
              </button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("electronics")}>
                Electronics
              </button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("jewelery")}>
                Jewelery
              </button>
            </li>
          </ul>
        </details>

        <Link className="nav-item" to={"/carrito"}>
          Carrito de compra
        </Link>
        <Link className="nav-item" to={"/formulario"}>
          Agregar Producto
        </Link>
      </ul>
      <Buscador onSearch={onSearch} />
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 Mi Tienda. Todos los derechos reservados.</p>
    </footer>
  );
}

function Compra() {
  return <h2 className="carrito">Agregado al carrito de compra</h2>;
}