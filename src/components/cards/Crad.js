import React from "react";
import "./card.scss";

const Card = ({ logo, image, title, description, rate }) => {
  return (
    <div className="card">
      <img className="backImg" src={image} alt={title} />
      <div className="logoSec">
        <img className="logo" src={logo} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>امیتاز: {rate} </p>
      </div>
    </div>
  );
};

export default Card;
