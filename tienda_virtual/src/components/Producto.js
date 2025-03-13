import { useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Pagina from "./Pagina";

export default function Prueba() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [ftrproductos, setFtrProductos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

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
    } else {
      const productosFiltrados = productos.filter(
        (producto) => producto.category === categoria
      );
      setFtrProductos(productosFiltrados);
    }
  };

  const handleSearch = (term) => {
    if (term === '') {
      setFtrProductos(productos);
    } else {
      const productosbuscados = productos.filter((producto) =>
        producto.title.toLowerCase().includes(term.toLowerCase())
      );
      setFtrProductos(productosbuscados);
    }
  };

  const cambiarCategoria = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

  const agregarAlCarrito = (product) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoActualizado = [...carritoActual, product];
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    setCarrito(carritoActualizado);
    mensajedecompra();
  };

  const mensajedecompra = () => {
    setMostrarMensaje(true);
    setTimeout(() => setMostrarMensaje(false), 2000); // Oculta el mensaje después de 3 segundos
  };

  const MostrarProductos = () => {
    const Mostrar = (
      <div>
        <div className="product-grid">
          {ftrproductos.map((producto) => (
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
    return Mostrar;
  };

  //cambiar el color del boton a pasar por encima
  useEffect(() => {
    const categoryBtns = document.querySelectorAll(".category-btn");
    const handleMouseEnter = (event) => {
      event.target.style.backgroundColor = "blue";
    };
    const handleMouseLeave = (event) => {
      event.target.style.backgroundColor = "gray";
    };

    categoryBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      categoryBtns.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [ftrproductos]);

  return (<>
      
      <Pagina Render={MostrarProductos} mensaje={mostrarMensaje} 
      OnCategoryChange={cambiarCategoria} onSearch={handleSearch}/>
      </>
  );
}
