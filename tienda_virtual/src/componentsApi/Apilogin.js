import "./stylesApi.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { types } from "../store/StoreReducer";
import { StoreContext } from "../store/StoreProvider";


export default function ApiLogin() {

  const [usuarios, setUsuarios] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const  navigate = useNavigate();

  const [store, dispatch] = useContext(StoreContext);
  const { user } = store;


  useEffect(() => {
    fetch("https://localhost:7248/api/Usuarios")
    .then((res) => res.json())
    .then((data) => setUsuarios(data))
        .catch((error) => console.error("Error consultado al recibir usuarios", error));
  }, [username, password]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    const usuarioEncontrado = usuarios.find((usuario) => usuario.nombre === username);

    if (usuarioEncontrado) {
      if(usuarioEncontrado.contrasena === password) {
        alert("Usuario encontrado: " + usuarioEncontrado.nombre);
        Cargarusuario(username, usuarioEncontrado.id);
        navigate("/menu");
      }
      else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario no encontrado");
    }
  }

  const handleInicio = () => {
    navigate("/");
  }

  const Cargarusuario = (username,id) => {
    const user = { name: username, id: id };
    dispatch({type: types.SET_USER, payload: user});
  }

  return (
    <div>
      <h1>API Login</h1>
      <button className="inicio-button" onClick={handleInicio}> Volver </button>
      <div className="form-container">
      <form id="loginForm" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>
      </div>
    </div>
  );
}