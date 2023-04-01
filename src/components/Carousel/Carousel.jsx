import "./Carousel.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PartiallyVisibleCarousel = ({ items, images, title, texto }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 620 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
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
        className="p"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={image.opinion ? image.opinion : "containerImg"}
          >
            {image.img && <img src={image.img} alt="Carousel Image" />}
            <h5>{image.title}</h5>
            {image.type.map((type, index) => (
              <div key={index} style={{ display: "flex", flexWrap: "wrap" }}>
                <span className={type.color}>{type.type}</span>
                <span>{type.price}</span>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default PartiallyVisibleCarousel;
