import "./MyProfilePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_prefix } from "../../App";

export default function MyProfilePage() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [homeCountryId, setHomeCountryId] = useState(0);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");

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

  const updateProfile = (event) => {
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

  const updatePassword = (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("New Password and Confirm New Password do not match");
    } else {
      axios
        .get(`${API_prefix}/profile/update/password`, {
          params: {
            currentPassword,
            newPassword,
            confirmNewPassword
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <form className="profile-form" onSubmit={updateProfile}>
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
      <form className="password-form" onSubmit={updatePassword}>
        <h2>Update your password here</h2>
        <div className="password-form__current-password">
          <label>Current Password: </label>
          <input
            type="password"
            name="current-password"
            value={currentPassword || ""}
            placeholder="Current password"
            onChange={(event) => setCurrentPassword(event.target.value)}
          ></input>
        </div>
        <div className="password-form__new-password">
          <label>New Password: </label>
          <input
            type="password"
            name="new-password"
            value={newPassword || ""}
            placeholder="New password"
            onChange={(event) => setNewPassword(event.target.value)}
          ></input>
        </div>
        <div className="password-form__confirm-new-password">
          <label>Confirm New Password: </label>
          <input
            type="password"
            name="confirm-new-password"
            value={confirmNewPassword || ""}
            placeholder="Confirm new password"
            onChange={(event) => setconfirmNewPassword(event.target.value)}
          ></input>
        </div>
        <button type="submit">Update password</button>
      </form>
    </>
  );
}
