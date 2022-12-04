import "./LoginPage.scss";
import { LoginForm } from "../../components";
import { useHistory } from "react-router-dom";

export default function LoginPage(props) {
    const history = useHistory();

    return (
        <LoginForm history={history}/>
    )
}