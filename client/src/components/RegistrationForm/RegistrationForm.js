import "./RegistrationForm.scss";
import { API_prefix } from "../../App";
import axios from "axios";
import { useState } from "react";

/**
 *
 * @param {string} str input string from user
 * @returns {boolean} false if contains invalid special characters, true if email is valid
 */
export function validateEmail(email) {
  const specialChars = /[`!#$%^&*()_\-=[\]{};':"\\|,<>/?~]/;
  return specialChars.test(email);
}

export default function RegistrationForm({ history }) {
  const [name, setName] = useState("");
  const [homeCountryId, setHomeCountryId] = useState(2);
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(username)) {
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
    <form className="registration-form" onSubmit={handleSubmit}>
      <div>
        <div className="registration-form__name">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="registration-form__home-country">
          <label>Select your home country: </label>
          <select
            name="homeCountry"
            onChange={(event) => setHomeCountryId(event.target.value)}
          >
            <option value={2}>United States of America</option>
            <option value={1}>Canada</option>
          </select>
        </div>
        <div className="registration-form__email">
          <label>Email: </label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your email"
            onChange={(event) => setLogin(event.target.value)}
          ></input>
        </div>
        <div className="registration-form__password">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
      </div>
      <button className="registration-form__submit-btn"  type="submit">Register</button>
    </form>
  );
}
