import React, { useState } from 'react';
import PapasModal from '../PapasModal/PapasModal';
import './portada.css';

const Portada = () => {

    const [modal, setModal] = useState(false);
 

    const handleModal = () => {
        setModal(true)
     
    }

    return (
        <div>
            <main className='containerMain'>
                <div className='containerInfoPortada'>
                    <h1 className='tituloPrincipal'>¿ESCUCHAS CRUNCH CRUNCH?</h1>
                    <h2 className='tituloSecundario'>Estás comiendo </h2>
                    <h2 className='tituloSecundario'>papas belga de Paprica</h2>
                    {modal && <PapasModal
                        setModal={setModal}
                        modal={modal}
                    >
                    <div className='InfoPapas infoPapasBelga'>
                    <h2>¿Papas belgas?</h2>
                    <p> También conocidas como frites, son un plato típico de la cocina belga que consiste en papas cortadas en bastones y fritas en aceite caliente hasta que estén doradas y crujientes por fuera y suaves por dentro.</p>
                    <p>Se suelen servir calientes y se pueden acompañar con salsas como la mayonesa, el ketchup o la salsa andalouse.</p>
                    <p>Lo que hace que las papas fritas belgas sean diferentes a otras papas fritas es su técnica de preparación.</p>
                    <p>Las papas se cortan en bastones gruesos y se fríen dos veces a diferentes temperaturas para crear una textura exterior crujiente y un interior suave.</p>
                    <p>Además, se suelen freír en aceite de sebo de vaca, lo que les da un sabor y aroma característico.</p>
                </div>
                    </PapasModal>
                    }
                    <div className='botones'>
                        <button className='btnPapasBelgas' onClick={handleModal}>
                            <img src="./assets/img/papas.png" alt="" /> ¿Papas belgas?
                        </button>
                        <button className='btnPideaqui'><img src="./assets/img/WPnegro.png" alt="logo whatsapp" />Pide aquí</button>
                    </div>
                </div>
                <div>
                    
                </div>
              
            
            </main>
        </div>
    );
}

export default Portada;
