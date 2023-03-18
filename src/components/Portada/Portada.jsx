import React, { useState } from 'react';
import PapasModal from '../PapasModal/PapasModal';
import './portada.css';

const Portada = () => {

    const [modal, setModal] = useState(false);
 

    const handleModal = () => {
        setModal(true)
     
    }

    return (
        <main className='containerMain'>
            <div>
                <h1 className='tituloPrincipal'>¿ESCUCHAS CRUNCH CRUNCH?</h1>
                <h2 className='tituloSecundario'>Estás comiendo </h2>
                <h2 className='tituloSecundario'>papas belga de Paprica</h2>
                {modal && <PapasModal 
                    setModal={setModal}

                />}
                <div className='botones'>
                    <button className='btnPapasBelgas' onClick={handleModal}> 
                        <img src="./assets/img/papas.png" alt="" /> ¿Papas belgas?
                    </button>
                    <button className='btnPideaqui'><img src="./assets/img/WPnegro.png" alt="logo whatsapp" />Pide aquí</button>
                </div>
            </div>

            <div className='btnWP'>
                <button>Pedi por WhatsApp <img src="./assets/img/WPnegro.png" alt="logo whatsapp" /></button>
            </div>
            
        </main>
    );
}

export default Portada;
