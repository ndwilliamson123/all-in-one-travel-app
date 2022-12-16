import { useEffect, useState } from "react";
import axios from "axios";
import { API_prefix } from "../../App";

export default function SelectedTripPage(props) {
  const [hotelData, setHotelData] = useState({});

  // need some logic to set the selected Trip if not passed down from user home page
  if (JSON.parse(localStorage.getItem("selectedTrip"))) {
    // console.log(JSON.parse(localStorage.getItem('selectedTrip')))
  }

  console.log(props);

  useEffect(() => {
    axios
      .get(`${API_prefix}/trips/hotel`, {
        params: {
          tripId: props.match.params.tripId,
        },
        withCredentials: true,
      })
      .then((response) => {
        setHotelData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);

  return (
    <div>
      <h3>Your Hotel</h3>
      <p>{hotelData.name}</p>
      <p>{hotelData.address}</p>
      <p>{hotelData.phone}</p>
      <a href={hotelData.website}>{hotelData.website}</a>
      <h1>Common Translations List</h1>
      <h1>On Demand Translation</h1>
      <h1>Emergency Contacts</h1>
      <h1>To Google Maps Integration</h1>
    </div>
  );
}
