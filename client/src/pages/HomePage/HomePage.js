import "./HomePage.scss";
import axios from "axios";
import { useEffect } from "react";
import { TripsList } from "../../components";
import { API_prefix } from "../../App";

export default function HomePage(props) {
  useEffect(() => {
    axios
      .get(`${API_prefix}/home`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>User Home Data Here</h1>
      <TripsList />
    </div>
  );
}
