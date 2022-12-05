import { useState } from "react";
import "./RegistrationForm.scss";
import axios from "axios";
import { API_prefix } from "../../App";

export default function RegistrationForm({ history }) {
  const [name, setName] = useState();
  const [homeCountry, setHomeCountry] = useState();
  const [username, setLogin] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      name,
      homeCountry,
      username,
      password,
    });

    axios
      .post(
        `${API_prefix}/register`,
        {
          name,
          homeCountry,
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
        history.push("/home");
      })
      .catch((error) => {
        alert("invalid username or password");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <label>Select your home country: </label>
      <select
        name="homeCountry"
        onChange={(event) => setHomeCountry(event.target.value)}
      >
        <option value={2}>United States of America</option>
        <option value={1}>Canada</option>
      </select>
      <label>Email: </label>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Enter your email"
        onChange={(event) => setLogin(event.target.value)}
      ></input>
      <label>Password: </label>
      <input
        type="password"
        name="email"
        value={password}
        placeholder="Enter your password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <button type="submit">Register</button>
    </form>
  );
}
