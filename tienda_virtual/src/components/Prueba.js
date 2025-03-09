import { useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Prueba({ onCompra }) {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [ftrproductos, setFtrProductos] = useState([]);
  const [categoria, setCategoria] = useState("");

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

  useEffect(() => {
    filtrarPorCategoria(categoria);
  }, [productos, categoria]);

  const filtrarPorCategoria = (categoria) => {
    if (categoria === "") {
      setFtrProductos(productos);
    }else{
      const productosFiltrados = productos.filter(
        (producto) => producto.category === categoria
      );
      setFtrProductos(productosFiltrados);
    }
  };

  const cambiarCategoria = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

  const agregarAlCarrito = (producto) => {
    onCompra();
  };

  return (
    <div>
      <div>
        <button onClick={() => cambiarCategoria("")}>Sexo</button>
        <button onClick={() => cambiarCategoria("men's clothing")}>Men's Clothing</button>
        <button onClick={() => cambiarCategoria("women's clothing")}>Women's Clothing</button>
        <button onClick={() => cambiarCategoria("electronics")}>Electronics</button>
        <button onClick={() => cambiarCategoria("jewelery")}>Jewelery</button>
      </div>

      <div className="product-grid">
        {ftrproductos.map((producto) => (
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
    </div>
  );
}