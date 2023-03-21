export default function Card({ product, onAddToCart }) {
  return (
    <div key={product.name} className="card">
      <p>{product.name}</p>
      <img src={product.image} alt="puppy" />
      <div className="pricing">
        <p>${product.price.toString()}</p>
        <button key={product.name} onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
