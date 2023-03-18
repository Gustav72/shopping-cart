import React from "react";
import Card from "./Card";

export default function Products({ onAddToCart }) {
  const PUPPIES = [
    {
      name: "Australian Cattle Dog",
      image: "./images/australian-cattle-dog.png",
      price: 1000,
    },
    {
      name: "Corgi",
      image: "./images/corgi.png",
      price: 1200,
    },
    {
      name: "German Shepherd",
      image: "./images/german-shepherd.png",
      price: 1400,
    },
    {
      name: "Golden Retriever",
      image: "./images/golden-retriever.png",
      price: 1000,
    },
    {
      name: "Shiba Inu",
      image: "./images/shiba-inu.png",
      price: 1500,
    },
    {
      name: "Keeshond",
      image: "./images/keeshond.png",
      price: 1000,
    },
  ];

  return (
    <div>
      <h1>Puppies</h1>
      <div className="product-container">
        {PUPPIES.map((puppy) => (
          <Card
            key={puppy.name}
            product={puppy}
            onAddToCart={() => onAddToCart(puppy)}
          />
        ))}
      </div>
    </div>
  );
}
