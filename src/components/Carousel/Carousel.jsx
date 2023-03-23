import "./Carousel.css";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PartiallyVisibleCarousel = ({ items,images,title,btn }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
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
                <div className="btnCarousel" href="google.com">{btn}</div>
            </div>
            <Carousel
                responsive={responsive}
                partialVisible={true}
                customButtonGroup={<button>Next</button>}
                partialVisibleSliderProps={partialVisibilitySettings}
                containerClass="carousel"
            >
                {images.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt="Carousel Image" height="290px" />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default PartiallyVisibleCarousel;