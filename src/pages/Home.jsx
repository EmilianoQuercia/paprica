
import React from "react";
import BtnWhatsapp from "../components/BtnWhatsapp/BtnWhatsapp";
import Portada from "../components/Portada/Portada";
import PartiallyVisibleCarousel from "../components/Carousel/Carousel";

const images = [
  "../../assets/img/card product 2.png",
  "../../assets/img/card product 4.png",
  "../../assets/img/card product 5.png"
];
const imagesDomicilio = [
  "../../assets/img/card product 2domicilio.png",
  "../../assets/img/card product 4domicilio.png",
  "../../assets/img/card product 5domicilio.png",
  "../../assets/img/card product 6domicilio.png",
  "../../assets/img/cardproductdomicilio.png"
];


const Home = () => {
  return (
    <div>
      <BtnWhatsapp/>
      <Portada />
      <PartiallyVisibleCarousel images={images} items={3} title={"Para compartir con toda la familia"} btn={"Pide aquí"}/>
      <PartiallyVisibleCarousel images={imagesDomicilio} items={4} title={"Pide nuestos productos a domicilio"} btn={"Aquí"}/>
    </div>
  );
};


export default Home;
