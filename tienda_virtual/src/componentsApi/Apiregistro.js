import "./stylesApi.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Apiregistro() {
  const [usuarios, setUsuarios] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [correo, setCorreo] = useState("");
  const  navigate = useNavigate();

  useEffect(() => {
    fetch("https://localhost:7248/api/Usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((error) =>
        console.error("Error consultado al recibir usuarios", error)
      );
  }, [username, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const rol = form.category.value;
    const correo = form.correo.value;

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.nombre === username);

    if (usuarioEncontrado) {
      alert("Nombre de usuario ya existente: " + usuarioEncontrado.username);
    } else {
        const nuevoUsuario = {
            nombre: username,
            contrasena: password,
            rol: rol,
            correo: correo,
        };
    
        try {
            const response = await fetch("https://localhost:7248/api/Usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoUsuario),
            });
    
            if (response.ok) {
            alert("Usuario registrado correctamente");
            navigate("/login");
            } else {
            alert("Error al registrar el usuario");
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        alert("Ocurrió un error al registrar el usuario.");
        }
    }
  };

  const handleInicio = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>API Registro</h1>
      <button className="inicio-button" onClick={handleInicio}> Volver </button>
      <div className="form-container">
        <form id="loginForm" className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nombre:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Rol:</label>
            <select id="category" name="category" required className="form-select"
            >
              <option value="rol">Selecionar su rol</option>
              <option value="Profesor">Profesor</option>
              <option value="Estudiante">Estudiante</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Correo electronico:</label>
            <input type="text" id="correo" name="password" required />
          </div>
          <button type="submit" className="form-button">
            Registro
          </button>
        </form>
      </div>
    </div>
  );
}
