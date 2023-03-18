
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
                        <h2>¿Cómo llegar?</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.9675969188418!2d-75.71064874160969!3d4.7922845000728165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38877d26d6f3bf%3A0x6ed53af226731f02!2sVilla%20Verde%20Plaza!5e0!3m2!1ses!2sar!4v1679170834745!5m2!1ses!2sar" width="500" height="400" ></iframe>
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
