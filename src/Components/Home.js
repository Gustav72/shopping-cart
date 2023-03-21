import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="call-to-action">
          <h1>Puppies That Stay Puppies!</h1>
          <button className="home-button">
            <Link to="/products" className="link">
              Get One Now!
            </Link>
          </button>
        </div>
        <div>
          <img
            className="home-puppy"
            src="images/home-puppies.png"
            alt="forever puppy"
          />
        </div>
      </div>
      <img
        className="home-image"
        src="images/green-curve.png"
        aria-label="none"
      />
    </div>
  );
}
