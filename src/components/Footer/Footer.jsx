import React from "react";
import "./footer.css";
import { GoCalendar } from "react-icons/go";
import { HiOutlineClock } from "react-icons/hi";
import { MdOutlinePlace } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="containerFooter">
        <div className="logofooter">
          <img src="./assets/img/Logo-web.png" alt="" />
          <h5>Las únicas papas de Pereira</h5>
        </div>
        <div className="infoFooter">
          <div>
            <div className="infoTitulos">
              <GoCalendar />
              <h4>Dias</h4>
            </div>
            <p>Martes a Viernes</p>
            <p>Sábados y Domingos</p>
          </div>
          <div>
            <div className="infoTitulos">
              <HiOutlineClock />
              <h4>Horarios</h4>
            </div>
            <p>17:00 a 22:00hs</p>
            <p>12:00 a 22:00hs</p>
          </div>
          <div>
            <div className="infoTitulos">
              <MdOutlinePlace />
              <h4>Ubicación</h4>
            </div>
            <p>Cra. 37 #30-51, Pereira,</p>
            <p>Risaralda, Colombia</p>
          </div>
        </div>
        <div>
          <a
            href="https://wa.me/573052975504?text=Hola+Paprika%21+Quisiera+hacer+un+pedido"
            target={"_blank"}
            className="infoRedes"
          >
            <img src="./assets/img/logoWhatsapp.png" alt="" />
            <p>+57 305 2975504</p>
          </a>
          <a
            href="https://www.facebook.com/carlo.duarte.37201"
            target={"_blank"}
            className="infoRedes"
          >
            <img src="./assets/img/logoFacebook.png" alt="" />
            <p>Paprika Papas Belgas</p>
          </a>
          <a
            href="https://www.instagram.com/paprikapapasbelgas/"
            target={"_blank"}
            className="infoRedes"
          >
            <img src="./assets/img/logoInsta.png" alt="" />
            <p>@paprikapapasbelgas</p>
          </a>
        </div>
      </div>
      <div>
        <p className="copy">
          2023 Paprika Papas Belgas.<div>© Todos los derechos reservados.</div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
