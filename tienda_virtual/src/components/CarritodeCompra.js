import "./styles.css";
import { useEffect, useState } from "react";
import Pagina from "./Pagina";

export default function Carrito() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const objproductos = JSON.parse(localStorage.getItem('carrito'));
    if (objproductos) {
      setProductos(objproductos);
    }
  }, []);

  const prodcarrito = () => {
    const carrito =(
        <div>
      <h2>Carrito de compra</h2>
      <div className="product-grid">
        {productos.map((producto) => (
          <button
          id="btn-articule"
          className="btn btn-white"
          key={producto.id}
        >
          <article className="product-article">
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <h2>${producto.price}</h2>
            <button
              className="btn btn-secondary category-btn"

            >
              Comprar
            </button>
          </article>
        </button>
        ))}
      </div>
    </div>
    );
    return carrito;
  };

  return (
    <Pagina Render={prodcarrito} />
  );
}
