import React from "react";
import "./CoffeeCard.css"; // Optional: Add styles for the coffee card

function CoffeeCard({ coffee }) {
  return (
    <div className="coffee-card">
      <img src={coffee.image} alt={coffee.name} />
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <p>Price: ${coffee.price}</p>
    </div>
  );
}

export default CoffeeCard;
