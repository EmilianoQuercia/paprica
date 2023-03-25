import React from "react";
import "./papasModal.css";
import { AiOutlineClose } from "react-icons/ai";

const PapasModal = ({
  setModalPapas,
  setModalCombos,
  setModalSalsas,
  modalPapas,
  modalCombos,
  modalSalsas,
  setModalUbicacion,
  modalUbicacion,

  children,
}) => {
  const ocultarModal = () => {
    modalPapas && setModalPapas(false);
    modalCombos && setModalCombos(false);
    modalSalsas && setModalSalsas(false);
    modalUbicacion && setModalUbicacion(false);
  };

  return (
    <div className="containerModal">
    
        <div className="containerInfoPapas">
          <div className="btnCerrar">
            <button onClick={ocultarModal}>
              <AiOutlineClose />
            </button>
          </div>
          {children}
          <div className="btnPapas">
            <button>
              <img src="./assets/img/WPnegro.png" alt="logo whatsapp" /> Pedir Ahora
            </button>
            <button onClick={ocultarModal}>Cerrar</button>
          </div>
        </div>
     
    </div>
  );
};

export default PapasModal;
