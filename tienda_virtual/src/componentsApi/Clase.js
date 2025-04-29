import "./stylesApi.css";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { useNavigate } from "react-router-dom";

export default function Clases() {
  const [clases, setClases] = useState([]);
  const [store] = useContext(StoreContext);
  const { clase } = store;
    const  navigate = useNavigate();

  useEffect(() => {
    if (clase.id) {
        fetch(`https://localhost:7248/api/Clases/${clase.id}`)
        .then((res) => res.json())
        .then((data) => setClases(data))
        .catch((error) =>
          console.error("Error consultado al recibir clases", error)
        );
    }else{
        alert("No tienes clases disponibles");
    }
  }, [clase.id]);

  const handleInicio = () => {
    navigate("/menu");
  }

  return (
    <div className="clasesapi-container">
    <h1 className="clasesapi-title">Detalles de la Clase</h1>
    <button className="inicio-button" onClick={handleInicio}> Volver Menu </button>
    <div className="clasesapi-list">
      <div key={clases.id} className="clasesapi-card">
        <h2 className="clasesapi-nombre">{clases.nombre}</h2>
        <p className="clasesapi-info">
          <strong>Tema:</strong> {clases.tema}
        </p>
        <p className="clasesapi-info">
          <strong>Autor:</strong> {clases.autor}
        </p>
        <p className="clasesapi-info">
          <strong>Código:</strong> {clases.codigo}
        </p>
        <p className="clasesapi-info">
          <strong>Estado:</strong> {clases.estado ? "Activo" : "Inactivo"}
        </p>
        <p className="clasesapi-info">
          <strong>Fecha:</strong> {new Date(clases.fechaCreacion).toLocaleDateString()}
        </p>
      </div>
    </div>
  </div>
  );
}

export function BuscarClase() {
  const [store] = useContext(StoreContext);
  const [Profe_Clase, setProfe_Clase] = useState([]);
  const { user } = store;

  useEffect(() => {
    fetch("https://localhost:7248/api/Profe_Clase")
      .then((res) => res.json())
      .then((data) => setProfe_Clase(data))
      .catch((error) =>
        console.error("Error consultado al recibir clases", error)
      );
  }, []);

  const clase = Profe_Clase.find((clase) => clase.id_profesor === user.id);

  return clase ? clase.id_clase : null;
}
