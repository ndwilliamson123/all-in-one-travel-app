import { API_prefix } from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NavBar() {
  const logoutUser = () => {
    axios
      .get(`${API_prefix}/logout`, { withCredentials: true })
      .then((response) => {
        localStorage.setItem("isLoggedIn", "false");
        window.location.reload(false)
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  if (localStorage.getItem("isLoggedIn") === "true") {
    return (
      <div>
        <div className="header__authentication">
          <Link to="/home" className="header__link">
            Home
          </Link>{" "}
          <Link to="/profile" className="header__link">
            My Profile
          </Link>{" "}
          <Link to="/" onClick={logoutUser} className="header__link">
            Logout
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header__nav-bar">
          <Link to="/login" className="header__link">
            Login
          </Link>{" "}
          <Link to="/register" className="header__link">
            Sign Up
          </Link>{" "}
        </div>
      </div>
    );
  }
}
