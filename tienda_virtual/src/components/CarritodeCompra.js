import "./styles.css";
import { useEffect, useState } from "react";
import Pagina from "./Pagina";

export default function Carrito() {
  const [productos, setProductos] = useState([]);
  const [ftrproductos, setFtrProductos] = useState([]);
  const [categoria, setCategoria] = useState("");
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
    setTotal(total.toFixed(2));
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

  const cambiarCategoria = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
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

  const ElimiarProducto = (id) => {
    const productosActualizados = productos.map(producto => {
      if (producto.id === id) {
        if (producto.cantidad > 1) {
          return { ...producto, cantidad: producto.cantidad - 1 };
        } else {
          return null;
        }
      }
      return producto;
    }).filter(producto => producto !== null);
    
    setProductos(productosActualizados);
    localStorage.setItem('carrito', JSON.stringify(productosActualizados));
  }

  const prodcarrito = () => {
    const carrito =(
        <div>
      <h2>Carrito de compra</h2>
      <h3 className="totalpre">Precio total: ${total}</h3>
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
            <p>Cantidad: {producto.cantidad}</p>
            <div className="CarritoBtn">
            <button
              className="btn btn-secondary category-btn"

            >
              Pagar
            </button>
            <button
              className="btn btn-secondary category-btn"
              onClick={() => ElimiarProducto(producto.id)}
            >
              Quitar
            </button>
            </div>
          </article>
        </button>
        ))}
      </div>
    </div>
    );
    return carrito;
  };

  return (
    <Pagina Render={prodcarrito} OnCategoryChange={cambiarCategoria} onSearch={handleSearch}/>
  );
}
