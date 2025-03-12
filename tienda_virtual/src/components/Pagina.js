import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

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

function Nav({OnCategoryChange}) {
  return (
    <nav className="nav">
      <details className="nav-item">
        <summary>Categorias</summary>
          <ul>
          <li>
              <button onClick={() => OnCategoryChange("")}>All</button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("men's clothing")}>Men's clothing</button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("women's clothing")}>women's clothing</button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("electronics")}>Electronics</button>
            </li>
            <li>
              <button onClick={() => OnCategoryChange("jewelery")}>Jewelery</button>
            </li>
          </ul>
        </details>
      <ul className="nav-list">
        <Link className="nav-item"  to={"/carrito"}>
          Categorias
        </Link>
        <Link className="nav-item" to={"/formulario"}>
          Carrito de compra - prueba
        </Link>
        <Link className="nav-item" to={"/estado"}>
          Buscar
        </Link>
        <Link className="nav-item" to={"/formulario"}>
          Agregar Producto
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
