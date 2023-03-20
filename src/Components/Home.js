import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div>
          <h1>Puppies That Stay Puppies!</h1>
          <h4>Once In A Lifetime Opportunity</h4>
          <button>
            <Link to="/products" className="link">
              See Pups Now!
            </Link>
          </button>
        </div>
        <div>
          <img
            className="home-puppy"
            src="images/shiba-inu.png"
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
