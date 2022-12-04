import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>My Travel App</div>
      <p>This is a header!</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
