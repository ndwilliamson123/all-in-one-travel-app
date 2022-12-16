import "./Header.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_prefix } from "../../App";

export default function Header() {
  const logoutUser = () => {
    axios
      .get(`${API_prefix}/logout`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <header>
      <div>My Travel App</div>
      <p>This is a header!</p>
      <nav>
        <Link to="/">Landing</Link> <Link to="/home">Home</Link>{" "}
        <Link to="/login">Login</Link> <Link to="/register">Sign Up</Link>{" "}
        <Link to="/profile">My Profile</Link>{" "}
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </nav>
    </header>
  );
}
