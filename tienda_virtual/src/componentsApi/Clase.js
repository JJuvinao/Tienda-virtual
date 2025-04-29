import "./stylesApi.css";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

export default function Clases() {
  const [clases, setClases] = useState([]);
  const id = BuscarClase();

  useEffect(() => {
    if (id) {
      fetch("https://localhost:7248/api/Clases/" + id)
        .then((res) => res.json())
        .then((data) => setClases(data))
        .catch((error) =>
          console.error("Error consultado al recibir clases", error)
        );
    }else{
        alert("No tienes clases disponibles");
    }
  }, [id]);

  return (
    <div className="clases-container">
      <h1>Clases Disponibles</h1>
      <div className="clases-list">
        <div key={clases.id} className="clase-card">
          <h2>{clases.nombre}</h2>
          <p>Tema: {clases.tema}</p>
          <p>Autor: {clases.autor}</p>
          <p>Código: {clases.codigo}</p>
          <p>Estado: {clases.estado ? "Activo" : "Inactivo"}</p>
          <p>Fecha: {new Date(clases.fecha).toLocaleDateString()}</p>
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

  const Pro_Clas = Profe_Clase.find(
    (Profe_Clase) => Profe_Clase.id_profesor === user.id
  );

  if (Pro_Clas) {
    return Pro_Clas.idClase;
  } else {
    return null;
  }
}
