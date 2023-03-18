import React from 'react';
import './papasModal.css';
import { AiOutlineClose } from "react-icons/ai";

const PapasModal = ({setModal, setModalCombos, setModalSalsas, modal, modalCombos, modalSalsas, setModalUbicacion, modalUbicacion, children}) => {

    const ocultarModal = () => {
        modal && setModal(false)
        modalCombos && setModalCombos(false)
        modalSalsas && setModalSalsas(false)
        modalUbicacion && setModalUbicacion(false)
    }

    return (
        <div className='containerModal'>
            <div className= 'containerPapas'>
                <div className='containerInfoPapas'>
                    <div className='btnCerrar'>
                        <button onClick={ocultarModal}><AiOutlineClose/></button>
                    </div>
                    {children}
                    <div className='btnPapas'>
                        <button onClick={ocultarModal}>Quiero seguir mirando</button>
                        <button><img src="./assets/img/WPnegro.png" alt="logo whatsapp" /> Pide aquí tus papas</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PapasModal;
