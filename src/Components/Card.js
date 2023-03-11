export default function Card({ product }) {
  const products = [];

  product.forEach((product) => {
    products.push(
      <div key={product.name} className="card">
        <h3>{product.name}</h3>
        <img src={product.image} alt="puppy" />
        <p>{product.price}</p>
        <button key={product.name}>Add to Cart</button>
      </div>
    );
  });

  return <>{products}</>;
}
