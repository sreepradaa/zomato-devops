import React from "react";
import "./Card.scss";
import Dine from "../../assets/images/Dine-Out.png";
import Night from "../../assets/images/Night-Life.png";
import Online from "../../assets/images/Online-Food.png";

const Card = ({ onCategorySelect }) => {
  const cards = [
    {
      img: Online,
      title: "Order Online",
      desc: "Stay home and order to your doorstep",
      filter: "order-online",
      alt: "orderImg",
    },
    {
      img: Night,
      title: "Nightlife and Clubs",
      desc: "Explore the city's top nightlife outlets",
      filter: "Nightlife",
      alt: "nightImg",
    },
    {
      img: Dine,
      title: "Dining",
      desc: "View the city's favourite venues",
      filter: "Dining",
      alt: "dineImg",
    },
  ];

  return (
    <div className="card">
      {cards.map((c) => (
        <div
          className="cardImg"
          key={c.filter}
          onClick={() => onCategorySelect && onCategorySelect(c.filter, c.title)}
        >
          <img src={c.img} alt={c.alt} />
          <h1>{c.title}</h1>
          <span>{c.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
