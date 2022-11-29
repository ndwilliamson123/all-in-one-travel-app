import { useState } from "react";
import "./LoginForm.scss";
import axios from "axios";

export default function LoginForm({history}) {
  const [username, setUsername] = useState("test@test.com");
  const [password, setPassword] = useState("abc123");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/auth",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        
        history.push("/home")
      })
      .catch((error) => {
        alert("invalid username or password");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Enter your email"
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <label>Password: </label>
      <input
        type="password"
        name="email"
        value={password}
        placeholder="Enter your password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <button type="submit">Log In</button>
    </form>
  );
}
