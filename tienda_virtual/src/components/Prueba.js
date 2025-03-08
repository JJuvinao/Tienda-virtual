import { useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Prueba({ onCompra }) {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const listaProductos = localStorage.getItem("products");
    if (listaProductos) {
      setProductos(JSON.parse(listaProductos));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProductos(data);
          localStorage.setItem("products", JSON.stringify(data));
        })
        .catch((error) => console.error("Error consultado", error));
    }
  }, []);

  const agregarAlCarrito = (producto) => {
    onCompra();
  };

  return (

    <div className="product-grid">
      <link to="/carrito">
               
               </link>
      {productos.map((producto) => (
        <button id="btn-articule" className="btn btn-white" key={producto.id}>
          <article className="product-article">
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <h2>${producto.price}</h2>
            <button
              className="btn btn-secondary"
              onClick={() => agregarAlCarrito(producto)}
            >
              Comprar
            </button>
          </article>
        </button>
      ))}
    </div>
  );
}


