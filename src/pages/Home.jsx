import React from "react";
import BtnWhatsapp from "../components/BtnWhatsapp/BtnWhatsapp";
import Portada from "../components/Portada/Portada";
import PartiallyVisibleCarousel from "../components/Carousel/Carousel";
import Extras from "../components/Extras/Extras";
import Carrousel2 from "../components/Carousel/Carrousel2";

const carruselCombos = [
  {
    img: "../../assets/img/image 14.png",
    title: "Metralleta",
    type: [
      { type: "Vegetariana", color: "celeste", price: "$ 13.000" },
      { type: "Res", color: "rosa", price: "$ 14.000" },
      { type: "pollo", color: "amarillo", price: "$ 14.000" },
    ],
  },
  {
    img: "../../assets/img/hamburPollo.png",
    title: "Mini Hamburguesa",
    type: [
      { type: "Vegetariana", color: "celeste", price: "$ 13.000" },
      { type: "Res", color: "rosa", price: "$ 14.000" },
      { type: "pollo", color: "amarillo", price: "$ 14.000" },
    ],
  },
  {
    img: "../../assets/img/alitas1.png",
    title: "Alitas BBQ",
    type: [
      { type: "8 piezas", color: "blanco", price: "$ 16.500" },
      { type: "12 piezas", color: "blanco", price: "$ 20.500" },
      { type: "20 piezas", color: "blanco", price: "$ 27.500" },
    ],
  },
  {
    img: "../../assets/img/alitas2.png",
    title: "Alitas fritas",
    type: [
      { type: "8 piezas", color: "blanco", price: "$ 15.500" },
      { type: "12 piezas", color: "blanco", price: "$ 19.500" },
      { type: "20 piezas", color: "blanco", price: "$ 26.500" },
    ],
  },
  {
    img: "../../assets/img/salchipapas.png",
    title: "Salchipapa",
    type: [
      {
        type: "Papas belgas, salchicha de pollo y 2 huevos de codorniz",
        color: "blanco",
        price: "$ 8.600",
      },
    ],
  },
  {
    img: "../../assets/img/camarones1.png",
    title: "Camarones grandes apanados",
    type: [
      {
        type: "12 piezas",
        color: "blanco",
        price: "$ 20.900",
      },
    ],
  },
];

const carruselSnack = [
  {
    img: "../../assets/img/wafle.png",
    title: "Wafle belga",
    price: "$ 6.500",
    type: "Sirope y mantequilla // Chocolate",
    color: "azul",
  },
  {
    img: "../../assets/img/conoPapa.png",
    title: "Cono de papas belgas",
    price: "$ 7.000",
    type: "Con salsa",
    color: "azul",
  },
  {
    img: "../../assets/img/patacones.png",
    title: "Patacones",
    price: "$ 5.000",
    type: "Hogao y paprika",
    color: "azul",
  },
];
const carruselBebidas = [
  {
    img: "../../assets/img/piña.png",
    title: "Piña Cool",
    price: "$ 3.500",
    type: "Piña y menta",
    color: "celeste",
  },
  {
    img: "../../assets/img/limonada.png",
    title: "Limonada de sandia",
    price: "$ 3.500",
    type: "Sandia, limon",
    color: "rosa",
  },
  {
    img: "../../assets/img/panela.png",
    title: "Panela silvestre",
    price: "$ 3.500",
    type: "Fresa, limon, panela, hierbabuena",
    color: "amarillo",
  },
  {
    img: "../../assets/img/piña2.png",
    title: "Infusion fría carambolo",
    price: "$ 3.500",
    type: "Carambolo, limon, panela, hierbabuena",
    color: "amarillo",
  },
];

const extras = [
  {
    cruz: "+",
    title: "Mini hamburguesa Adicional",
    price: "$ 2.500",
  },
  {
    cruz: "+",
    title: "Par de patacones",
    price: "$ 2.000",
  },
  {
    cruz: "+",
    title: "Par de alas",
    price: "$ 2.500",
  },
  {
    cruz: "+",
    title: "Par de huevos de codorniz",
    price: "$ 1.100",
  },
  {
    cruz: "+",
    title: "Salsa BBQ",
    price: "$ 2.000",
  },
  {
    cruz: "+",
    title: "Salsa adicional (2 onzas)",
    price: "$ 1.100",
  },
];

const opiniones = [
  {
    title:
      "“Que rico saber que están de nuevo, la verdad tienen un producto único y con orgullo los recomiedno a quien me pregunta por lugares con comida rica. Me gustan que sean íntegros, y que no paguen a gente para decir verdades sobre sus ricos productos.” ",
    type: "Juan",
    opinion: "opinion",
  },
  {
    title:
      "“Son los mejores y espero que esten vigentes por mucho tiempo más. Espero que sigan su deliciosos sabores.”",
    type: "Mary Luz",
    opinion: "opinion",
  },
  {
    title: "“Las mejores papas del planeta”",
    type: "Tati",
    opinion: "opinion",
  },
  {
    title:
      "“Son las mejores papas que me he comido en toda mi existencia, súper exquisitas!!!”",
    type: "Fer",
    opinion: "opinion",
  },
];

const Home = () => {
  return (
    <div id="home">
      <BtnWhatsapp />
      <Portada />
      <div id="combos">
        <PartiallyVisibleCarousel
          images={carruselCombos}
          title={"Combos"}
          texto={""}
        />
      </div>
      <div id="snack">
        <Carrousel2 images={carruselSnack} title={"Snacks"} texto={""} />
      </div>
      <div id="bebidas">
        <Carrousel2
          images={carruselBebidas}
          title={"Bebidas (14 onzas)"}
          texto={""}
        />
      </div>

      <div id="extras">
        <Extras extras={extras} title={"Extras"} />
      </div>
      <div className="containerOpiniones">
        <Carrousel2
          images={opiniones}
          title={"Lo que dicen nuestro clientes"}
          texto={""}
        />
      </div>
    </div>
  );
};

export default Home;
