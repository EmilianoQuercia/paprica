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
          <img src="./assets/img/logoWhatsapp.png" alt="logo whatsapp" />
          <div>{"Realiza tu pedido"}</div>
        </button>
      </a>
    </div>
  );
};

export default BtnWhatsapp;
