import "./Map.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useState } from "react";

const GoogleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const GoogleGeocodingApiKey = process.env.REACT_APP_GOOGLE_GEOCODING_API_KEY;

export default function Map() {
  const [address, setAddress] = useState(
    "1500 NE Miami Place, Miami, FL 33125"
  );
  const [mapCenter, setMapCenter] = useState({})
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GoogleMapsApiKey,
  });

  const getGpsCoordinates = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GoogleGeocodingApiKey}`
      )
      .then((response) => {
        console.log(response.data.results[0].geometry.location);
        setMapCenter(response.data.results[0].geometry.location)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formatAddress = (address) => {
    setAddress(address.replace(" ", "+"))
  }

  if (!isLoaded) {
    return <div>No map to display...</div>;
  } else {
    return (
      <>
        <form>
          <input
            name="address"
            value={address}
            onChange={(event) => formatAddress(event.target.value)}
          ></input>
          <button onClick={getGpsCoordinates}>Get it</button>
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
