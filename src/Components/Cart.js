export default function Cart({ className, cartItems }) {
  return (
    <div className={className}>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.name}</h3>
          <img src={item.image} alt="puppy" />
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
