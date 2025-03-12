import "./styles.css";
import { useEffect, useState } from "react";
import Pagina from "./Pagina";

export default function Carrito() {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const objproductos = JSON.parse(localStorage.getItem('carrito'));
    if (objproductos) {
      const productosAgrupados = agruparProductos(objproductos);
      setProductos(productosAgrupados);
    }
  }, []);

  useEffect(() => {
    const total = productos.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
    setTotal(total);
  }, [productos]);


  const agruparProductos = (productos) => {
    const productosAgrupados = productos.reduce((acc, producto) => {
      const productoExistente = acc.find(p => p.id === producto.id);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        acc.push({ ...producto, cantidad: 1 });
      }
      return acc;
    }, []);
    return productosAgrupados;
  };

  const prodcarrito = () => {
    const carrito =(
        <div>
      <h2>Carrito de compra</h2>
      <h3 className="totalpre">Precio total: ${total}</h3>
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
            <p>Cantidad: {producto.cantidad}</p>
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
