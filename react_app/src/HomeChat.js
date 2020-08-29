import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomeChat extends Component {
  render() {
    return (
      <div id="welcomepyn">
        <h1>
          ¿Eres <strong style={{ color: "#00AF50" }}>programador</strong> o{" "}
          <strong style={{ color: "#FE0B00" }}>novato</strong>?
        </h1>
        <h4>
          haz click <Link to={{ pathname: "/chat" }}> aquí </Link>para saber la
          respuesta
        </h4>

        <p>Conoce algunas ventajas del aprendizaje colaborativo:</p>
        <ul>
          <li>Habilidades de trabajo en equipo</li>
          <li>Generación de nuevas ideas</li>
          <li>Aumento de productividad</li>
        </ul>
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/un-colab-chat.appspot.com/o/pairprogramming.svg?alt=media&token=e33a675c-195e-424c-8caf-cafd995501bc"
            alt="pair programming"
          />
          <a class="freepik" href="https://stories.freepik.com/web">
            Illustration by Freepik Stories
          </a>
        </figure>

        <blockquote class="cita">
          <p>
            "Hemos establecido la educación como un deporte de un solo jugador,
            pero la realidad es que es un deporte de equipo".
            <i>– Jaime Casap, Evangelista Jefe de Educación de Google</i>
          </p>
        </blockquote>
      </div>
    );
  }
}

export default HomeChat;
