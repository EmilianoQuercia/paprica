import React, { useState } from "react";
import { Link } from "react-router-dom";
import PapasModal from "../PapasModal/PapasModal";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import "./navbar.css";
import "../PapasModal/papasModal.css";

const Navbar = () => {
  const [modalUbicacion, setModalUbicacion] = useState(false);
  const [modalSalsas, setModalSalsas] = useState(false);
  const [modalPapas, setModalPapas] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const screen = window.matchMedia("(max-width: 992px)");
  const pantalla = screen.matches;

  const screen1 = window.matchMedia("(max-width: 576px)");
  const view578 = screen1.matches;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleModalSalsa = () => {
    setModalSalsas(true);
  };
  const handleModalUbicacion = () => {
    setModalUbicacion(true);
  };

  const handleModalPapas = () => {
    setModalPapas(true);
  };

  return (
    <>
      {!pantalla ? (
        <div className="containerNav">
          <a href={"#home"}>
            <img src="./assets/img/Logo1.png" alt="" />
          </a>

          <nav className="nav">
            <span onClick={handleModalPapas}>¿Papas Belgas?</span>
            {modalPapas && (
              <PapasModal setModalPapas={setModalPapas} modalPapas={modalPapas}>
                <div className="InfoPapas infoPapasBelga">
                  <h2>¿Papas belgas?</h2>
                  <p>
                    {" "}
                    También conocidas como frites, que son un platillo típico de
                    la cocina belga. Lo que hace que estas papas fritas sean
                    diferentes a otras es su técnica de preparación..
                  </p>
                  <p>
                    Son cortadas en bastones gruesos y fritas dos veces a
                    diferentes temperaturas en aceite de sebo de vaca, lo que
                    les da una textura exterior crujiente y un interior suave, y
                    un sabor y aroma característico.
                  </p>
                </div>
              </PapasModal>
            )}

            <span onClick={handleModalUbicacion}>¿Como llegar?</span>
            {modalUbicacion && (
              <PapasModal
                setModalUbicacion={setModalUbicacion}
                modalUbicacion={modalUbicacion}
              >
                <div className="InfoPapas infoMapa">
                  <h2>¿Cómo llegar?</h2>
                  <p>
                    Nos encontramos en el mall Villa Verde Plaza ubicado en Cra.
                    37 #30-51, Pereira, Risaralda, Colombia.
                  </p>
                  <p>De martes a viernes de 17:00 a 22:00 hs</p>
                  <p>Sábados y Domingos de 12:00 a 22:00 hs</p>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.9675969188418!2d-75.71064874160969!3d4.7922845000728165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38877d26d6f3bf%3A0x6ed53af226731f02!2sVilla%20Verde%20Plaza!5e0!3m2!1ses!2sar!4v1679170834745!5m2!1ses!2sar"
                    width="450"
                    height="220"
                  ></iframe>
                </div>
              </PapasModal>
            )}

            <span onClick={handleModalSalsa}>¿Nuestras Salsas?</span>
            {modalSalsas && (
              <PapasModal
                setModalSalsas={setModalSalsas}
                modalSalsas={modalSalsas}
              >
                <div className="InfoPapas infoSalsas">
                  <h2>Salsas</h2>
                  <img src="./assets/img/salsas2.png" alt="carta de combos" />
                  <p>Salsa Extra solo por $1000</p>
                </div>
              </PapasModal>
            )}
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-autoclose-true"
                className="drop"
              >
                Categorias
              </Dropdown.Toggle>
              <Dropdown.Menu className="opcionesDrop">
                <Dropdown.Item className="opc" href="#combos">
                  Combos
                </Dropdown.Item>
                <Dropdown.Item className="opc" href="#snack">
                  Snack
                </Dropdown.Item>
                <Dropdown.Item className="opc" href="#bebidas">
                  Bebidas
                </Dropdown.Item>
                <Dropdown.Item className="opc" href="#extras">
                  Extras
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a
              href="https://wa.me/573052975504?text=Hola+Paprika%21+Quisiera+hacer+un+pedido"
              target={"_blank"}
            >
              <img src="./assets/img/logoWhatsapp.png" />
            </a>
            <a
              href="https://www.facebook.com/carlo.duarte.37201"
              target={"_blank"}
            >
              <img src="./assets/img/logoFacebook.png" />
            </a>
            <a
              href="https://www.instagram.com/paprikapapasbelgas/"
              target={"_blank"}
            >
              <img src="./assets/img/logoInsta.png" />
            </a>
          </nav>
        </div>
      ) : (
        <>
          <div className={isOpen ? "containerHamb" : "containerNav"}>
            <div className="headerHamb">
              <a href={"#home"}>
                <img src="./assets/img/Logo1.png" alt="" />
              </a>
              <button className="menuHamb" onClick={toggleMenu}>
                {isOpen ? (
                  <RxCross1 className="menuHamb" />
                ) : (
                  <GiHamburgerMenu className="menuHamb" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <nav className="navHamb">
              <span onClick={handleModalPapas}>¿Papas Belgas?</span>
              {modalPapas && (
                <PapasModal
                  setModalPapas={setModalPapas}
                  modalPapas={modalPapas}
                >
                  <div className="InfoPapas infoPapasBelga">
                    <h2>¿Papas belgas?</h2>
                    <p>
                      {" "}
                      También conocidas como frites, que son un platillo típico
                      de la cocina belga. Lo que hace que estas papas fritas
                      sean diferentes a otras es su técnica de preparación..
                    </p>
                    <p>
                      Son cortadas en bastones gruesos y fritas dos veces a
                      diferentes temperaturas en aceite de sebo de vaca, lo que
                      les da una textura exterior crujiente y un interior suave,
                      y un sabor y aroma característico.
                    </p>
                  </div>
                </PapasModal>
              )}
              <span onClick={handleModalUbicacion}>¿Como llegar?</span>
              {modalUbicacion && (
                <PapasModal
                  setModalUbicacion={setModalUbicacion}
                  modalUbicacion={modalUbicacion}
                >
                  <div className="InfoPapas infoMapa">
                    <h2>¿Cómo llegar?</h2>
                    <p>
                      Nos encontramos en el mall Villa Verde Plaza ubicado en
                      Cra. 37 #30-51, Pereira, Risaralda, Colombia.
                    </p>
                    <p>De martes a viernes de 17:00 a 22:00 hs</p>
                    <p>Sábados y Domingos de 12:00 a 22:00 hs</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.9675969188418!2d-75.71064874160969!3d4.7922845000728165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38877d26d6f3bf%3A0x6ed53af226731f02!2sVilla%20Verde%20Plaza!5e0!3m2!1ses!2sar!4v1679170834745!5m2!1ses!2sar"></iframe>
                  </div>
                </PapasModal>
              )}
              <span onClick={handleModalSalsa}>¿Nuestras Salsas?</span>
              {modalSalsas && (
                <PapasModal
                  setModalSalsas={setModalSalsas}
                  modalSalsas={modalSalsas}
                >
                  <div className="InfoPapas infoSalsas">
                    <h2>Salsas</h2>

                    {!view578 ? (
                      <img
                        src="./assets/img/salsas2.png"
                        alt="carta de combos"
                      />
                    ) : (
                      <img
                        src="./assets/img/salsasMobile.png"
                        alt="carta de combos"
                      />
                    )}

                    <p>Salsa Extra solo por $1000</p>
                  </div>
                </PapasModal>
              )}
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-autoclose-true"
                  className="drop"
                >
                  Categorias
                </Dropdown.Toggle>
                <Dropdown.Menu className="opcionesDrop">
                  <Dropdown.Item
                    className="opc"
                    href="#combos"
                    onClick={toggleMenu}
                  >
                    Combos
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="opc"
                    href="#snack"
                    onClick={toggleMenu}
                  >
                    Snack
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="opc"
                    href="#bebidas"
                    onClick={toggleMenu}
                  >
                    Bebidas
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="opc"
                    href="#extras"
                    onClick={toggleMenu}
                  >
                    Extras
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="redesHamb">
                <a
                  href="https://wa.me/573052975504?text=Hola+Paprika%21+Quisiera+hacer+un+pedido"
                  target={"_blank"}
                >
                  <img src="./assets/img/logoWhatsapp.png" />
                </a>
                <a
                  href="https://www.facebook.com/carlo.duarte.37201"
                  target={"_blank"}
                >
                  <img src="./assets/img/logoFacebook.png" />
                </a>
                <a
                  href="https://www.instagram.com/paprikapapasbelgas/"
                  target={"_blank"}
                >
                  <img src="./assets/img/logoInsta.png" />
                </a>
              </div>
              <div className="botonNav">
                <a
                  href="https://wa.me/573052975504?text=Hola+Paprika%21+Quisiera+hacer+un+pedido"
                  target={"_blank"}
                  className="Pideaqui"
                >
                  <button className="btnPideaqui">
                    <img src="./assets/img/WPnegro.png" alt="logo whatsapp" />
                    Pide aquí
                  </button>
                </a>
              </div>
            </nav>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
