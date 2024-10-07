import React from "react";
import CoffeeCard from "./CoffeeCard";

const coffeeData = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold coffee shot.",
    price: 2.5,
    image: "espresso.jpg", // Replace with your image path
  },
  {
    id: 2,
    name: "Latte",
    description: "Creamy coffee with steamed milk.",
    price: 3.0,
    image: "latte.jpg", // Replace with your image path
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Espresso with frothy milk.",
    price: 3.5,
    image: "cappuccino.jpg", // Replace with your image path
  },
];

function CoffeeList() {
  return (
    <div className="coffee-list">
      {coffeeData.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default CoffeeList;
