import "./LoginForm.scss";
import { API_prefix } from "../../App";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const [username, setLogin] = useState("test@test.com");
  const [password, setPassword] = useState("abc123");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `${API_prefix}/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        history.push("/home");
        localStorage.setItem("isLoggedIn", "true")
        window.location.reload(false)
      })
      .catch((error) => {
        alert("invalid username or password");
      });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <div className="login-form__email">
          <label>Email: </label>
          <input
            type="text"
            name="username"
            value={username || ""}
            placeholder="Enter your email"
            onChange={(event) => setLogin(event.target.value)}
          ></input>
        </div>
        <div className="login-form__password">
          <label>Password: </label>
          <input
            type="password"
            name="email"
            value={password || ""}
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
      </div>
      <button className="login-form__submit-btn" type="submit">
        Log In
      </button>
    </form>
  );
}
