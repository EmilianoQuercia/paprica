import React, { useState } from 'react';
// import PapasModal from '../PapasModal/PapasModal';
import './portada.css';

const Portada = () => {

    return (
        <div>
            <main className='containerMain'>
                <div className='containerInfoPortada'>
                    <h1 className='tituloPrincipal'>¿ESCUCHAS CRUNCH CRUNCH?</h1>
                    <h2 className='tituloSecundario'>Estás comiendo papas belga de <div>Paprica</div></h2>
                    <div className='botones'>
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
