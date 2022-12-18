import "./AddTripPage.scss";
import axios from "axios";
import { useState } from "react";
import { API_prefix } from "../../App";

export default function AddTripPage() {
  const [countryId, setCountryId] = useState(3);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`${API_prefix}/trips/new-trip`, {
        params: {
          date_start: startDate,
          date_end: endDate,
          destination_country_id: countryId,
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
    <>
      <h1 className="add-trip-form__notice">
        THIS PAGE IS A WORK IN PROGRESS. YOU CAN SAVE THE TRIP AND SEE IT ON
        YOUR LIST, BUT THIS FORM IS INCOMPLETE
      </h1>
      <form className="add-trip-form" onSubmit={handleSubmit}>
        <div className="add-trip-form__destination">
          <label>Select your destination country: </label>
          <select
            name="destinationCountry"
            onChange={(event) => setCountryId(event.target.value)}
          >
            <option value={3}>France</option>
            <option value={4}>Spain</option>
          </select>
        </div>
        <div className="add-trip-form__start-date">
          <label>Start date:</label>
          <input
            type="date"
            onChange={(event) => setStartDate(event.target.value)}
          ></input>
        </div>
        <div className="add-trip-form__end-date">
          <label>End date:</label>
          <input
            type="date"
            onChange={(event) => setEndDate(event.target.value)}
          ></input>
        </div>
        <button type="submit">Create trip</button>
      </form>
    </>
  );
}
