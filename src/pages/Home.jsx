
import React from "react";
import BtnWhatsapp from "../components/BtnWhatsapp/BtnWhatsapp";
import Portada from "../components/Portada/Portada";
import PartiallyVisibleCarousel from "../components/Carousel/Carousel";

const images = [
  "../../assets/img/card product 2.png",
  "../../assets/img/card product 4.png",
  "../../assets/img/card product 5.png",
  "../../assets/img/card product 6.png",
  "../../assets/img/card product 7.png",
  "../../assets/img/card product 8.png",
  "../../assets/img/cardPatacones.png",
];


const Home = () => {
  return (
    <div>
      <BtnWhatsapp/>
      <Portada />
      <h1>Remplazar por componente carrucel 1</h1>
      <h1>Remplazar por componente carrucel 2</h1>
      <h1>Remplazar por componente carrucel 3</h1>
      <PartiallyVisibleCarousel images={images} />
      
    </div>
  );
};


export default Home;
