import "./LoginPage.scss";
import { LoginForm } from "../../components";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login">
      <p className="login__prompt">Please enter your login information</p>
      <LoginForm />
      <p className="login__redirect">
        Don't have a login yet? Register{" "}
        <Link to="/register" className="login__redirect-link">
          here
        </Link>
        !
      </p>
    </div>
  );
}
