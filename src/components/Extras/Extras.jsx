import React from "react";
import "./extras.css";

const Extras = ({ extras, title }) => {
  return (
    <div className="containerCarrousel">
      <div className="containerExtras">
        <div className="titulo">{title}</div>
        <div className="cardExtra">
          {extras.map((extra, index) => (
            <div key={index} className="extras">
              <h5>{extra.cruz}</h5>
              <p>{extra.title}</p>
              <p>{extra.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extras;
