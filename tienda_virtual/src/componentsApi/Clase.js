import "./stylesApi.css";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { useNavigate } from "react-router-dom";

export default function Clases() {
  const [clases, setClases] = useState([]);
  const [nombreClase, setNombreClase] = useState("");
  const [temaClase, setTemaClase] = useState("");
  const [estadoClase, setEstadoClase] = useState(false);
  const [store] = useContext(StoreContext);
  const { clase } = store;
  const [ isEditing, setIsEditing ] = useState(true);
  const  navigate = useNavigate();

  useEffect(() => {
    if (clase.id) {
        fetch(`https://localhost:7248/api/Clases/${clase.id}`)
        .then((res) => res.json())
        .then((data) => {
          setClases(data);
          setNombreClase(data.nombre);
          setTemaClase(data.tema);
          setEstadoClase(data.estado);
        })
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

  const EditarClase = async (event) => {
    if (isEditing) {
      event.target.innerText = "Guardar Cambios";
    }else{
      if (ValidarEnBlanco){
        event.target.innerText = "Editar Clase";
        const claseActualizada = {
          id: clases.id,
          tema: temaClase,
          nombre: nombreClase,
          autor: clases.autor,
          codigo: clases.codigo,
          estado: estadoClase,
          fechaCreacion: clases.fechaCreacion
        };

        try {
          const response = await fetch(`https://localhost:7248/api/Clases/${clases.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(claseActualizada),
          });
          if (response.ok) {
            alert("Clase actualizada correctamente");
            navigate("/menu");
          } else {
            alert("Error al actualizar la clase");
          }
        } catch (error) {
          alert("Error al actualizar");
        }
      }
    }
    setIsEditing(!isEditing);
  }

  const ValidarEnBlanco = () => {
    if (nombreClase.trim() === "" || temaClase.trim() === "") {
      return false;
    }
    return true;
  }

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "nombreClase":
        setNombreClase(event.target.value);
        break;
      case "temaClase":
        setTemaClase(event.target.value);
        break;
    }
  }

  const EliminarClase = async () => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta clase?");
    if (confirmacion) {
      try{
        const response = await fetch(`https://localhost:7248/api/Clases/${clases.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })
        if (response.ok) {
          alert("Clase eliminada correctamente");
          navigate("/menu");
        } else {
          alert("Error al eliminar la clase");
        }
      }catch(error){
        console.error("Error al eliminar la clase", error);
      }
    }
  }

  return (
    <div className="clasesapi-container">
      <h1 className="clasesapi-title">Detalles de la Clase</h1>
      <button className="inicio-button" onClick={handleInicio}> Volver Menu </button>
      <div className="clasesapi-list">
        <div key={clases.id} className="clasesapi-card">
          <input type="text" className="clasesapi-nombre" 
            value={nombreClase} disabled={isEditing} name="nombreClase"
            onChange={handleInputChange}/>
          <div>
            <strong>Tema:</strong>
            <input type="text" className="clasesapi-info" 
              value={temaClase} disabled={isEditing} name="temaClase"
              onChange={handleInputChange}/>
          </div>
          
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
          <button className="clasesapi-button" onClick={EliminarClase}>Eliminar Clase</button>
          <button className="clasesapi-button" name="BtnEditar" onClick={EditarClase}>Editar Clase</button>
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
