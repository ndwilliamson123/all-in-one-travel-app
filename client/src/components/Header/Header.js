import "./Header.scss";
import { API_prefix } from "../../App";
import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const logoutUser = () => {
    axios
      .get(`${API_prefix}/logout`, { withCredentials: true })
      .then((response) => {
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <h1 className="header__title">All In One Travel App</h1>
      <div>
        <div className="header__nav-bar">
          <Link to="/login" className="header__link">
            Login
          </Link>{" "}
          <Link to="/register" className="header__link">
            Sign Up
          </Link>{" "}
        </div>
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
    </header>
  );
}
