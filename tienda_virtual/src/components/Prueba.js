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

  

  useEffect(() => {
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = 'blue';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = 'gray';
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      categoryBtns.forEach((btn) => {
        btn.removeEventListener('mouseenter', () => {
          btn.style.backgroundColor = 'blue';
        });

        btn.removeEventListener('mouseleave', () => {
          btn.style.backgroundColor = 'gray';
        });
      });
    };
  }, [productos]);

  return (

    <div className="product-grid">
      {productos.map((producto) => (
        <button id="btn-articule" className="btn btn-white" key={producto.id}>
          <article className="product-article">
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <h2>${producto.price}</h2>
            <button 
              className="btn btn-secondary category-btn"
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


