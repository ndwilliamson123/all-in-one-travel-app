import { useState } from "react";
import "./RegistrationForm.scss";
import axios from "axios";
import { API_prefix } from "../../App";

/**
 *
 * @param {string} str input string from user
 * @returns {boolean} true if contains invalid special characters, false if email is valid
 */
export function validateEmail(email) {
  const specialChars = /[`!#$%^&*()_\-=[\]{};':"\\|,<>/?~]/;
  return !specialChars.test(email);
}

export default function RegistrationForm({ history }) {
  const [name, setName] = useState();
  const [homeCountryId, setHomeCountryId] = useState(2);
  const [username, setLogin] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(username)) {
      alert("Invalid email. Please correct and resubmit");
    } else {
      axios
        .put(`${API_prefix}/register`, {
          name,
          home_country_id: homeCountryId,
          email: username,
          password,
        })
        .then((response) => {
          alert(response.data.message);
          history.push("/login");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
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
        onChange={(event) => setHomeCountryId(event.target.value)}
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
