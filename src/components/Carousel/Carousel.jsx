import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) === images.length - 1 ? 0 : currentImageIndex + 1);
    };

    return (
        <div className="carousel">
            <button className="carousel-button" onClick={handlePrevClick}>{"<"}</button>
            <img className="carousel-image" src={images[currentImageIndex]} alt="Carousel Image" />
            <img className="carousel-image" src={images[currentImageIndex+1]} alt="Carousel Image" />
            {/* <img className="carousel-image" src={images[currentImageIndex+2]} alt="Carousel Image" /> */}
            <button className="carousel-button" onClick={handleNextClick}>{">"}</button>
        </div>
    );
};

export default Carousel;
