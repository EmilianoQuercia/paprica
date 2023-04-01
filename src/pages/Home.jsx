import React from "react";
import BtnWhatsapp from "../components/BtnWhatsapp/BtnWhatsapp";
import Portada from "../components/Portada/Portada";
import PartiallyVisibleCarousel from "../components/Carousel/Carousel";
import Extras from "../components/Extras/Extras";
import Carrousel2 from "../components/Carousel/Carrousel2";
import {
  carruselCombos,
  carruselSnack,
  carruselBebidas,
  opiniones,
  extras,
} from "../utils/arraysCarrouseles";

const Home = () => {
  return (
    <div id="home">
      <BtnWhatsapp />
      <Portada />

      <div id="combos"></div>
      <br />
      <div>
        <PartiallyVisibleCarousel
          images={carruselCombos}
          title={"Combos"}
          texto={""}
        />
      </div>
      <div id="snack"></div>
      <div>
        <Carrousel2 images={carruselSnack} title={"Snacks"} texto={""} />
      </div>
      <div id="bebidas"></div>
      <div>
        <Carrousel2
          images={carruselBebidas}
          title={"Bebidas (14 onzas)"}
          texto={""}
        />
      </div>

      <div id="extras"></div>
      <div>
        <Extras extras={extras} title={"Extras"} />
      </div>
      <div className="containerOpiniones">
        <Carrousel2
          images={opiniones}
          title={"Lo que dicen nuestros clientes"}
          texto={""}
        />
      </div>
    </div>
  );
};

export default Home;
