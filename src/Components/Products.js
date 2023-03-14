import Card from "./Card";

export default function Products() {
  const PUPPIES = [
    {
      name: "Australian Cattle Dog",
      image: "./images/australian-cattle-dog.png",
      price: "$1,000",
    },
    {
      name: "Corgi",
      image: "./images/corgi.png",
      price: "$1,200",
    },
    {
      name: "German Shepherd",
      image: "./images/german-shepherd.png",
      price: "$1,400",
    },
    {
      name: "Golden Retriever",
      image: "./images/golden-retriever.png",
      price: "$1,000",
    },
    {
      name: "Shiba Inu",
      image: "./images/shiba-inu.png",
      price: "$1,500",
    },
    {
      name: "Keeshond",
      image: "./images/keeshond.png",
      price: "$1,000",
    },
  ];

  return (
    <div>
      <h1>Puppies</h1>
      <div className="product-container">
        <Card product={PUPPIES} />
      </div>
    </div>
  );
}
