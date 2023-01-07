import "./Header.scss";
import { NavBar } from "../index";
import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <h1 className="header__title">All In One Travel App</h1>
        <NavBar />
    </header>
  );
}
