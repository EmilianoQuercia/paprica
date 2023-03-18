
import React from "react";
import BtnWhatsapp from "../components/BtnWhatsapp/BtnWhatsapp";
import Portada from "../components/Portada/Portada";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <BtnWhatsapp/>
      <Portada />
      {/* aca iria un array con las imagenes previamente hecho */}
      <Carousel images={["https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg",
      "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
      "https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg"]}/>
      <h1>Remplazar por componente carrucel 1</h1>
      <h1>Remplazar por componente carrucel 2</h1>
      <h1>Remplazar por componente carrucel 3</h1>
    </div>
  );
};


export default Home;
