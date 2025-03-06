import { useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Prueba() {
  //boot de estado
  const [productos, setProductos] = useState([]);

  //solo para ejecutar una vez
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

  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <article key={producto.id} className="product-article">
          <img src={producto.image} alt={producto.title} />
          <h2>{producto.title}</h2>
          <h3>{producto.description}</h3>
        </article>
      ))}
    </div>
  );
}
