import React from "react";
import BtnWhatsapp from "../components/BtnWhatsapp/BtnWhatsapp";
import Portada from "../components/Portada/Portada";
import PartiallyVisibleCarousel from "../components/Carousel/Carousel";
import Extras from "../components/Extras/Extras";



const carrusel1 = [
  {
    img: "../../assets/img/image 14.png",
    title: "Metralleta",
    price: "$ 13.000",
    type: "Vegetariana",
    color: "celeste"
  },
  {
    img: "../../assets/img/image 14.png",
    title: "Metralleta",
    price: "$ 14.000",
    type: "Res",
    color: "rosa"
  },
  {
    img: "../../assets/img/image 14.png",
    title: "Metralleta",
    price: "$ 14.000",
    type: "Pollo",
    color:"amarillo"
  },

];
const carrusel2 = [
  {
    img:   "../../assets/img/hamburPollo.png",
    title: "Mini Hamburguesa",
    price: "$ 12.500",
    type: "Vegetariana",
    color:"celeste"
  },
  {
    img:   "../../assets/img/hamburPollo.png",
    title: "Mini Hamburguesa",
    price: "$ 13.500",
    type: "Res",
    color:"rosa"
  },
  {
    img:   "../../assets/img/hamburPollo.png",
    title: "Mini Hamburguesa",
    price: "$ 13.500",
    type: "Pollo crispy",
    color:"amarillo"
  },

];
const carrusel3 = [
  {
    img:   "../../assets/img/alitas1.png",
    title: "Alitas BBQ",
    price: "$ 16.500",
    type: "8 piezas",
    color:"blanco"
  },
  {
    img:   "../../assets/img/alitas2.png",
    title: "Alitas fritas",
    price: "$ 15.500",
    type: "8 piezas",
    color:"blanco"
  },
  {
    img:   "../../assets/img/alitas3.png",
    title: "Alitas BBQ",
    price: "$ 20.500",
    type: "12 piezas",
    color:"blanco"
  },
  {
    img:   "../../assets/img/alitas4.png",
    title: "Alitas fritas",
    price: "$ 19.500",
    type: "12 piezas",
    color:"blanco"
  },
  {
    img:   "../../assets/img/alitas5.png",
    title: "Alitas BBQ",
    price: "$ 27.500",
    type: "20 piezas",
    color:"blanco"
  },
  {
    img:   "../../assets/img/alitas6.png",
    title: "Alitas fritas",
    price: "$ 26.500",
    type: "20 piezas",
    color:"blanco"
  },

];

const carrusel4 = [
  {
    img:   "../../assets/img/salchipapas.png",
    title: "Salchipapa",
    price: "$ 8.600",
    type: "Papas belgas, salchicha de pollo y 2 huevos de codorniz",
    color:"blanco"
  },
  {
    img:   "../../assets/img/camarones1.png",
    title: "Camarones grandes apanados",
    price: "$ 20.900",
    type: "12 piezas",
    color:"blanco"
  },
]

const carrusel5 = [
  {
    img:   "../../assets/img/wafle.png",
    title: "Wafle belga",
    price: "$ 6.500",
    type: "Sirope y mantequilla",
    color:"azul"
  },
  {
    img:   "../../assets/img/wafle.png",
    title: "Wafle belga",
    price: "$ 6.500",
    type: "Con chocolate",
    color:"azul"
  },
  {
    img:   "../../assets/img/conoPapa.png",
    title: "Cono de papas belgas",
    price: "$ 7.000",
    type: "Con salsa",
    color:"azul"
  },
  {
    img:   "../../assets/img/patacones.png",
    title: "Patacones",
    price: "$ 5.000",
    type: "Hogao y paprika",
    color:"azul"
  },

]
const carrusel6 = [
  {
    img:   "../../assets/img/piña.png",
    title: "Piña Cool",
    price: "$ 3.500",
    type: "Piña y menta",
    color:"celeste"
  },
  {
    img:   "../../assets/img/limonada.png",
    title: "Limonada de sandia",
    price: "$ 3.500",
    type: "Sandia, limon",
    color:"rosa"
  },
  {
    img:   "../../assets/img/panela.png",
    title: "Panela silvestre",
    price: "$ 3.500",
    type: "Fresa, limon, panela, hierbabuena",
    color:"amarillo"
  },
  {
    img:   "../../assets/img/piña2.png",
    title: "Infusion fría carambolo",
    price: "$ 3.500",
    type: "Carambolo, limon, panela, hierbabuena",
    color:"amarillo"
  },
]

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

]

const opiniones = [
  {
    title: "Tienen variedad de comidas todas muy ricas, las papas belgas son únicas, aunque manejan muchos tipos de comidas las alitas son a mi criterio el plato que las me ha gustado, tienen una textura crocante y manejan precios muy buenos.",
    type: "Juan Osorio",
    opinion: 'opinion'
  },
  {
    title: "Los invito a prueben los batidos de la casa, artesanales y llenos de sabor. Y el personal es muy atento, y la señorita que atiende la caja es la mejor. Tienen servicio a domicilio. Vale la pena probar!",
    type: "Mary Luz Mafla",
    opinion: 'opinion'
  },
  {
    title: "El ambiente en el lugar es agradable su atención muy buena variedad en la comida y buen sabor me encanta",
    type: "Veronica Arias Aguirre",
    opinion: 'opinion'
  },
  {
    title: "Tienen variedad de comidas todas muy ricas, las papas belgas son únicas, aunque manejan muchos tipos de comidas las alitas son a mi criterio el plato que las me ha gustado, tienen una textura crocante y manejan precios muy buenos.",
    type: "Luis Alejandro Alvarado",
    opinion: 'opinion'
  },
  {
    title: "Tienen variedad de comidas todas muy ricas, las papas belgas son únicas, aunque manejan muchos tipos de comidas las alitas son a mi criterio el plato que las me ha gustado, tienen una textura crocante y manejan precios muy buenos.",
    type: "Claudia Naranjo",
    opinion: 'opinion'
  },
]

const Home = () => {
  return (
    <div id="home">
      <BtnWhatsapp />
      <Portada />
      <div id="combos">
        <PartiallyVisibleCarousel
          images={carrusel1}
          title={"Combos"}
          texto={
            "Metralleta es un sándwich típico belga, con pan francés blando batavia, proteina en salsa BBQ de la casa y papas belgas en su interior."
          }
        />
      </div>
      <PartiallyVisibleCarousel
        images={carrusel2}
        title={""}
        texto={"Este combo trae 2 unidades pan artensanal, salsa de tomate ahumado, batavia, proteína (60 gramos cada una), mermelada de cebolla y queso mozzarella."}
      />
      <PartiallyVisibleCarousel
        images={carrusel3}
        title={""}
        texto={""}
      />
      <PartiallyVisibleCarousel
        images={carrusel4}
        title={""}
        texto={""}
      />
      <div id="snack">
        <PartiallyVisibleCarousel
          images={carrusel5}
          title={"Snacks"}
          texto={""}
        />
      </div>
      <div id="bebidas">
        <PartiallyVisibleCarousel
          images={carrusel6}
          title={"Bebidas (14 onzas)"}
          texto={""}
        />
      </div>
     
        <div id="extras">
          <Extras
           extras={extras}
           title={"Extras"}
          />
        </div>
      <div className="containerOpiniones" >
         <PartiallyVisibleCarousel
          images={opiniones}
          title={"Lo que dicen nuestro clientes"}
          texto={""}
        />
      </div>
    </div>
  );
};

export default Home;
