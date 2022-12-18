import "./TripList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./TripList.scss";
import { API_prefix } from "../../App";
import { TripCard } from "../index";

export default function TripList({ selectTrip }) {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const clickCard = (index) => {
    selectTrip(trips[index]);
  };

  useEffect(() => {
    axios
      .get(`${API_prefix}/trips`, { withCredentials: true })
      .then((response) => {
        setTrips(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        if (error.response.status === 401) {
          history.push("/login");
        }
      });
  }, [history]);

  return (
    <div className="trip-list__container">
      <div className="trip-list__header">
        <Link to="/home/add-trip" className="trip-list__add-new-link">
          Add a new trip
        </Link>
        <h3 className="trip-list__title">Your saved trips:</h3>
      </div>
      <ul className="trip-list">
        {trips.map((trip, index) => {
          return (
            <TripCard
              trip={trip}
              index={index}
              key={trip.id}
              clickCard={clickCard}
            />
          );
        })}
      </ul>
    </div>
  );
}
