import React, { useState, useEffect } from "react";

export default function Estado() {
  const [contador, setContador] = useState(1);

  function Contar() {
    setContador(contador + 1);
  }

  useEffect(() => {
    document.getElementById("titulo").innerHTML = contador;
    console.log("Se ejecutó el useEffect", contador) ;
  }, [contador]);

  return (
    <>
      <button onClick={Contar}>Prueba</button>
      <h1 id="titulo">Contador: {contador}</h1>
      <h2>Sexo sexo mucho sexo</h2>
    </>
  );
}
