import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <img src="images/corgi.png" alt="forever puppy" />
      </div>
      <div>
        <h1>Buy Forever Pups Today!</h1>
        <button>
          <Link to="/products" className="link">
            See Pups Now!
          </Link>
        </button>
      </div>
    </>
  );
}
