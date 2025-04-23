import "./stylesApi.css";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";

export default function Clases() {

const [clases, setClases] = useState([]);
const id = BuscarClase(); 

useEffect(() => {
    fetch("https://localhost:7248/api/Clases/"+id)
      .then((res) => res.json())
      .then((data) => setClases(data))
      .catch((error) =>
        console.error("Error consultado al recibir clases", error)
      );
  }, []);

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

    useEffect (() => {
        fetch("https://localhost:7248/api/Profe_Clase")
        .then((res) => res.json())
        .then((data) => setProfe_Clase(data))
        .catch((error) =>
            console.error("Error consultado al recibir clases", error)
        );
    },[]);

    const clase = Profe_Clase.find((clase) => clase.idUsuario === user.id);

    if (clase) {
        return clase.idClase;
    } else {
        return null;
    }

}