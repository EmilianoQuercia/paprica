import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PapasModal from '../PapasModal/PapasModal';
import './navbar.css';

const Navbar = () => {


    const [modalUbicacion, setModalUbicacion] = useState(false);
    const [modalCombos, setModalCombos] = useState(false);
    const [modalSalsas, setModalSalsas] = useState(false);
 

    const handleModalCombos = () => {
        setModalCombos(true)
    }
    const handleModalSalsa = () => {
        setModalSalsas(true)
    }
    const handleModalUbicacion = () => {
        setModalUbicacion(true)
    }

    return (
        <div className='containerNav'>
            <nav className='nav'>
                <img src="./assets/img/Logo1.png" alt="" />
                <span onClick={handleModalUbicacion}>Como llegar</span>
                {modalUbicacion && <PapasModal
                    setModalUbicacion={setModalUbicacion}
                    modalUbicacion={modalUbicacion}
                >
                    <div className='InfoPapas'>
                        <img  src="./assets/img/mapa.png" alt="carta de combos" />
                    </div>
                </PapasModal>
                }      
                <span onClick={handleModalCombos}>Combos</span>
                {modalCombos && <PapasModal
                    setModalCombos={setModalCombos}
                    modalCombos={modalCombos}
                >
                <div className='InfoPapas'>
                    <img  src="./assets/img/combos.png" alt="carta de combos" />
                </div>
                </PapasModal>
                }
                <span onClick={handleModalSalsa}>Salsas</span>
                {modalSalsas && <PapasModal
                    setModalSalsas={setModalSalsas}
                    modalSalsas={modalSalsas}
                >
                    <div className='InfoPapas'>
                    <img  src="./assets/img/salsas.png" alt="carta de combos" />
                </div>
                </PapasModal>
                }
            </nav>
            <div className='redes'>
                <Link to={''}><img src='./assets/img/logoWhatsapp.png'/></Link>
                <a href='https://www.facebook.com/carlo.duarte.37201'target={'_blank'} ><img src='./assets/img/logoFacebook.png'/></a>
                <a href='https://www.instagram.com/paprikapapasbelgas/' target={'_blank'}><img src='./assets/img/logoInsta.png'/></a>

            </div>
        </div>
    );
}

export default Navbar;
