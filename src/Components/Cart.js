export default function Cart({ className, cartItems, onUpdateCartItem }) {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total + parseFloat(item.product.price).toFixed(2) * item.quantity,
      0
    );
  };

  return (
    <div className={className}>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.product.name}</h3>
          <img src={item.product.image} alt="puppy" />
          <p>${item.product.price.toString()}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => onUpdateCartItem(item, "add")}>Add</button>
          <button onClick={() => onUpdateCartItem(item, "delete")}>
            Delete
          </button>
        </div>
      ))}
      <h2>Total Price: ${getTotalPrice().toFixed(2)}</h2>
    </div>
  );
}
