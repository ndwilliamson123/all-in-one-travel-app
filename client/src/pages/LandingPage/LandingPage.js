import "./LandingPage.scss";
import heroImage from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="hero">
        <img className="hero__image" src={heroImage} alt="hero logo" />
        <div className="hero__text">
          <h3 className="hero__welcome">WELCOME</h3>
          <p>This is the one-stop-shop for all your travel needs.</p>
          <p>Adventure awaits.{" "}
            <Link className="landing-page-sign-up" to="/register">
              Sign Up
            </Link>{" "}
            for an account!
          </p>
        </div>
      </div>
    </>
  );
}
