import "./styles.css";
import { useEffect, useState } from "react";

export default function PruebasApi(){

      const [Usuarios, setUsuarios] = useState([]);

      useEffect(() => {
        fetch("https://localhost:7248/api/Usuarios")
        .then((res) => res.json())
        .then((data) => setUsuarios(data))
            .catch((error) => console.error("Error consultado al recibir usuarios", error));
      }, []);

      
}