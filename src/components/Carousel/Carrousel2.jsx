import "./Carousel.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carrousel2 = ({ items, images, title, texto }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 280 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const partialVisibilitySettings = {
    shift: 30,
    dragStep: 1,
    // Change the below value to adjust the amount of visibility
    // for the next and previous items in the carousel
    partialVisibilityGutter: 40,
  };

  return (
    <>
      <div className="dataCarouselContainer">
        <div className="titleCarousel">{title}</div>
        <div className="textCarousel">{texto}</div>
      </div>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        // customButtonGroup={<button>Next</button>}
        partialVisibleSliderProps={partialVisibilitySettings}
        containerClass="carousel"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={image.opinion ? image.opinion : "containerImg"}
          >
            {image.img && <img src={image.img} alt="Carousel Image" />}
            <h5>{image.title}</h5>

            <span>{image.price}</span>

            <span className={image.color}>{image.type}</span>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carrousel2;
