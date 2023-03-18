import React from 'react';
import './papasModal.css';
import { AiOutlineClose } from "react-icons/ai";

const PapasModal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false)
    }

    return (
        <div className= 'containerPapas'>
            <div className='containerInfoPapas'>
                <div className='btnCerrar'>
                    <button onClick={ocultarModal}><AiOutlineClose/></button>
                </div>
                <div className='InfoPapas'>
                    <h2>¿Papas belgas?</h2>
                    <p> También conocidas como frites, son un plato típico de la cocina belga que consiste en papas cortadas en bastones y fritas en aceite caliente hasta que estén doradas y crujientes por fuera y suaves por dentro.</p>
                    <p>Se suelen servir calientes y se pueden acompañar con salsas como la mayonesa, el ketchup o la salsa andalouse.</p>
                    <p>Lo que hace que las papas fritas belgas sean diferentes a otras papas fritas es su técnica de preparación.</p>
                    <p>Las papas se cortan en bastones gruesos y se fríen dos veces a diferentes temperaturas para crear una textura exterior crujiente y un interior suave.</p>
                    <p>Además, se suelen freír en aceite de sebo de vaca, lo que les da un sabor y aroma característico.</p>
                </div>
                <div className='btnPapas'>
                    <button onClick={ocultarModal}>Quiero seguir mirando</button>
                    <button><img src="./assets/img/WPnegro.png" alt="logo whatsapp" /> Pide aquí tus papas</button>
                </div>
            </div>
        </div>
    );
}

export default PapasModal;
