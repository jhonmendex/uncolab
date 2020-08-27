import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomeChat extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenido a programadores y novatos</h1>
        <p> Conoce algunas ventajas del aprendizaje colaborativo</p>
        <li>Habilidades de trabajo en equipo</li>
        <li>Generación de nuevas ideas</li>
        <li>Aumento de productividad</li>
        ¿Eres programador o novato? <Link to="/chat">haz click aquí</Link>
        <i>
          “Hemos establecido la educación como un deporte de un solo jugador,
          pero la realidad es que es un deporte de equipo”. – Jaime Casap,
          Evangelista Jefe de Educación de Google
        </i>
      </div>
    );
  }
}

export default HomeChat;
