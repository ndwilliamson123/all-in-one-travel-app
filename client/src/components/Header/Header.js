import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>My Travel App</div>
      <p>This is a header!</p>
      <nav>
        <Link to="/">Landing</Link> <Link to="/home">Home</Link>{" "}
        <Link to="/login">Login</Link> <Link to="/register">Sign Up</Link>
      </nav>
    </header>
  );
}
