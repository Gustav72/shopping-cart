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
      <div id="cart-card">
        <h1 className="cart">Cart</h1>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.product.image} alt="puppy" />

            <div className="item-data">
              <p>{item.product.name}</p>
              <div>
                <div>
                  <p>${item.product.price.toString()}</p>
                  <p> ✖ {item.quantity}</p>
                </div>
                <button onClick={() => onUpdateCartItem(item, "add")}>
                  Add
                </button>
                <button
                  className="delete-button"
                  onClick={() => onUpdateCartItem(item, "delete")}
                >
                  ✖
                </button>
              </div>
            </div>
          </div>
        ))}
        <h2>Total Price: ${getTotalPrice().toFixed(2)}</h2>
        <button>Checkout Now</button>
      </div>
    </div>
  );
}
