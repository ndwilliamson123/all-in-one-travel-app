import "./MyProfilePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_prefix } from "../../App";

export default function MyProfilePage() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [homeCountryId, setHomeCountryId] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_prefix}/profile`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setLogin(response.data.email);
        setHomeCountryId(response.data.home_country_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`${API_prefix}/profile/update`, {
        params: {
          name: name,
          home_country_id: homeCountryId,
          email: login,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Edit your profile data here</h2>
      <div className="profile-form__name">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name || ""}
          placeholder="Enter your name"
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="profile-form__home-country">
        <label>Select your home country: </label>
        <select
          name="homeCountry"
          onChange={(event) => setHomeCountryId(event.target.value)}
        >
          <option value={2}>United States of America</option>
          <option value={1}>Canada</option>
        </select>
      </div>
      <div className="profile-form__email">
        <label>Email: </label>
        <input
          type="text"
          name="username"
          value={login || ""}
          placeholder="Enter your email"
          onChange={(event) => setLogin(event.target.value)}
        ></input>
      </div>
      <button type="submit">Save changes</button>
    </form>
  );
}
