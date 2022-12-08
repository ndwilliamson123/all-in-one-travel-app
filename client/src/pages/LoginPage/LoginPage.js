import "./LoginPage.scss";
import { LoginForm } from "../../components";
import { useHistory, Link } from "react-router-dom";

export default function LoginPage(props) {
  const history = useHistory();

  return (
    <>
      <p>Please enter your login information</p>
      <LoginForm history={history} />
      <p>
        New user? Register <Link to="/register">here</Link>!
      </p>
    </>
  );
}
