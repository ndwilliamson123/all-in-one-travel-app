import { TranslationCard } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_prefix } from "../../App";

export default function SelectedTripPage(props) {
  const [hotelData, setHotelData] = useState({});
  const [translations, setTranslations] = useState([]);
  const [phraseToTranslate, setPhraseToTranslate] = useState("");
  const [translatedPhrase, setTranslatedPhrase] = useState("");

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

  useEffect(() => {
    axios
      .get(`${API_prefix}/translator`, {
        params: {
          countryId:
            JSON.parse(localStorage.getItem("selectedTrip"))
              .destination_country_id || props.trip.destination_country_id,
        },
        withCredentials: true,
      })
      .then((response) => {
        setTranslations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);

  const translateInput = (event) => {
    event.preventDefault();

    axios
      .get(`${API_prefix}/translator/on-demand`, {
        params: {
          phraseToTranslate,
          countryId:
            JSON.parse(localStorage.getItem("selectedTrip"))
              .destination_country_id || props.trip.destination_country_id,
        },
        withCredentials: true,
      })
      .then((response) => {
        setTranslatedPhrase(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Your Hotel</h3>
      <p>{hotelData.name}</p>
      <p>{hotelData.address}</p>
      <p>{hotelData.phone}</p>
      <a target="_blank" rel="noopener noreferrer" href={hotelData.website}>
        Go to your hotel's website
      </a>
      <h1>Common Translations List</h1>
      <ul>
        {translations.map((translation, index) => {
          return <TranslationCard translation={translation} key={index} />;
        })}
      </ul>
      <h1>On Demand Translation</h1>
      <form onSubmit={translateInput}>
        <textarea
          type="text"
          name="phrase"
          value={phraseToTranslate}
          placeholder="Enter text to translate here"
          onChange={(event) => setPhraseToTranslate(event.target.value)}
        ></textarea>
        <textarea
          readOnly
          name="translation"
          value={translatedPhrase}
          placeholder="Translated text will appear here"
        ></textarea>
        <button type="submit">Translate</button>
      </form>
      <h1>Emergency Contacts</h1>
      <h1>To Google Maps Integration</h1>
    </div>
  );
}
