import "./AddTripPage.scss";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_prefix } from "../../App";

export default function AddTripPage() {
  const history = useHistory();
  const [countryId, setCountryId] = useState(3);
  const [startDate, setStartDate] = useState("2023-01-04");
  const [endDate, setEndDate] = useState("2023-01-12");
  const [hotelName, setHotelName] = useState("MEININGER Hotel Paris Porte de Vincennes");
  const [hotelAddress, setHotelAddress] = useState("37 Bd Carnot, 75012 Paris, France");
  const [hotelPhone, setHotelPhone] = useState("+33182883057");
  const [hotelWebsiteUrl, setHotelWebsiteUrl] = useState("https://www.meininger-hotels.com/en/hotels/paris/hotel-paris-porte-de-vincennes/?utm_source=gmb&utm_medium=referral&utm_campaign=PAR-PV&utm_content=website");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`${API_prefix}/trips/new-trip`, {
        params: {
          date_start: startDate,
          date_end: endDate,
          destination_country_id: countryId,
          hotel: {
            name: hotelName,
            address: hotelAddress,
            phone: hotelPhone,
            websiteUrl: hotelWebsiteUrl,
          },
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        history.push("/home")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add-trip">
      <form className="add-trip-form" onSubmit={handleSubmit}>
        <p>Please enter your new trip information</p>
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
        <div className="add-trip-form__hotel">
          <p>Enter your hotel info below</p>
          <div className="add-trip-form__hotel-name">
            <label>Name:</label>
            <input
              type="text"
              name="hotelName"
              value={hotelName || ""}
              placeholder="Fancy Hotel Name"
              onChange={(event) => setHotelName(event.target.value)}
            ></input>
          </div>
          <div className="add-trip-form__hotel-address">
            <label>Address:</label>
            <input
              type="text"
              name="hotelAddress"
              value={hotelAddress || ""}
              placeholder="Address"
              onChange={(event) => setHotelAddress(event.target.value)}
            ></input>
          </div>
          <div className="add-trip-form__hotel-phone">
            <label>Phone:</label>
            <input
              type="text"
              name="hotelPhone"
              value={hotelPhone || ""}
              placeholder="+33523969154"
              onChange={(event) => setHotelPhone(event.target.value)}
            ></input>
          </div>
          <div className="add-trip-form__hotel-website">
            <label>Website:</label>
            <input
              type="text"
              name="hotelWebsite"
              value={hotelWebsiteUrl || ""}
              placeholder="https://www.travel-site-hotel.com"
              onChange={(event) => setHotelWebsiteUrl(event.target.value)}
            ></input>
          </div>
        </div>
        <button type="submit">Create trip</button>
      </form>
    </div>
  );
}
