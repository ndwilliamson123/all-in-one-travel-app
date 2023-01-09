import "./RegistrationPage.scss";
import { RegistrationForm } from "../../components";
import { useHistory, Link } from "react-router-dom";

export default function RegistrationPage(props) {
  const history = useHistory();

  return (
    <div className="registration">
      <p className="registration__prompt">
        Please enter your information to create your account
      </p>
      <RegistrationForm history={history} />
      <p className="registration__redirect">
        Already signed up? {" "}
        <Link to="/login" className="registration__redirect-link">
        Click here
        </Link>{" "}
        to login!
      </p>
    </div>
  );
}
