import "./RegistrationPage.scss";
import { RegistrationForm } from "../../components";
import { useHistory, Link } from "react-router-dom";

export default function RegistrationPage(props) {
  const history = useHistory();

  return (
    <>
      <p>Please enter your information to create your account</p>
      <RegistrationForm history={history} />
      <p>
        Already signed up? Click <Link to="/login">here</Link> to login!
      </p>
    </>
  );
}
