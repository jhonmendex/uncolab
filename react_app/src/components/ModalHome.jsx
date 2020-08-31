import React from "react";
import Modal from "../components/Modal";
import "../components/styles/HomeModal.css";
const HomeModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="HomeModal">
        {props.taskStatus == "nosubmission" && (
          <div class="alert alert-warning" role="alert">
            Aún no es posible saber si eres Programador o Novato, envía tu
            programa (submission) para conocer! 🙁
          </div>
        )}
        {props.taskStatus == "programmer" && (
          <>
            <div class="alert alert-primary mr-4" role="alert">
              <h1>¡Felicitaciones! Eres un programador 😏</h1>
              <p>Los mejores programadores siempre comparten su conocimiento</p>
            </div>
            <button className="btn btn-primary m-2">
              Colaborar a un Novato
            </button>
          </>
        )}
        {props.taskStatus == "noob" && (
          <>
            <div class="alert alert-danger mr-4" role="alert">
              <h1>¡Te falta poco para ser programador! 🙁</h1>
              <p>
                No te preocupes, siempre hay alguien dispuesto a ayudarte a
                subir de nivel
              </p>
            </div>
            <button className="btn btn-primary m-2">
              Recibir colaboración de un Programador
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};
export default HomeModal;
