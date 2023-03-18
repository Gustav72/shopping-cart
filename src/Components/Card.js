export default function Card({ product, onAddToCart }) {
  return (
    <div key={product.name} className="card">
      <h3>{product.name}</h3>
      <img src={product.image} alt="puppy" />
      <p>${product.price.toString()}</p>
      <button key={product.name} onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
