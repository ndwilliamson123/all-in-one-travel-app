import "./Map.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";

const GoogleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const GoogleGeocodingApiKey = process.env.REACT_APP_GOOGLE_GEOCODING_API_KEY;

export default function Map(props) {
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GoogleMapsApiKey,
  });

  useEffect(() => {
    setAddress(props.hotelAddress);
  }, [props.hotelAddress]);

  const getGpsCoordinates = (event) => {
    console.log(document.getElementById("map-form"))
    event.preventDefault();

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GoogleGeocodingApiKey}`
      )
      .then((response) => {
        setMapCenter(response.data.results[0].geometry.location);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!isLoaded) {
    return <div>No map to display...</div>;
  } else {
    return (
      <>
        <form id="map-form" onSubmit={getGpsCoordinates}>
          <input
            type="text"
            name="address"
            placeholder="Enter a location"
            value={address || ""}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
          <button type="submit">Get it</button>
        </form>
        <GoogleMap
          zoom={13}
          center={mapCenter}
          mapContainerClassName="map-container"
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </>
    );
  }
}
