import "./AddTripPage.scss";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_prefix } from "../../App";

export default function AddTripPage() {
  const history = useHistory();
  const [countryId, setCountryId] = useState(4);
  const [startDate, setStartDate] = useState("2023-01-11");
  const [endDate, setEndDate] = useState("2023-01-18");
  const [hotelName, setHotelName] = useState("ibis Madrid Centro");
  const [hotelAddress, setHotelAddress] = useState("C. de Manuela Malasaña, 6, 28004 Madrid, Spain");
  const [hotelPhone, setHotelPhone] = useState("+34914485816");
  const [hotelWebsiteUrl, setHotelWebsiteUrl] = useState("https://all.accor.com/hotel/3318/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps");

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
