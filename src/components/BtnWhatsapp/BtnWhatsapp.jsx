import React from "react";
import "./btnWhatsapp.css";

const BtnWhatsapp = () => {
  return (
    <div className="btnWP">
      <a
        href="https://wa.me/573052975504?text=Hola+Paprika%21+Quisiera+hacer+un+pedido"
        target={"_blank"}
      >
        <button>
          <img src="./assets/img/WPnegro.png" alt="logo whatsapp" />
          {"Realiza tu pedido"}
        </button>
      </a>
    </div>
  );
};

export default BtnWhatsapp;
