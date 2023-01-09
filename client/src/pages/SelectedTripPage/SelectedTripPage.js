import "./SelectedTripPage.scss";
import { TranslationCard, Map } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_prefix } from "../../App";

export default function SelectedTripPage(props) {
  const [hotelData, setHotelData] = useState({});
  const [translations, setTranslations] = useState([]);
  const [phraseToTranslate, setPhraseToTranslate] = useState("");
  const [translatedPhrase, setTranslatedPhrase] = useState("");

  const languageName = {
    3: "French",
    4: "Spanish",
  };

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
        setTranslatedPhrase(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="selected-trip">
      <div className="selected-trip__hotel">
        <div className="selected-trip__hotel-info">
          <h2>Your Hotel</h2>
          <p>
            <u>Name:</u> {hotelData.name}
          </p>
          <p>
            <u>Address:</u> {hotelData.address}
          </p>
          <p>
            <u>Telephone:</u>{" "}
            <a href={`tel:${hotelData.phone}`}>{hotelData.phone}</a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={hotelData.website}
            >
              Go to your hotel's website
            </a>
          </p>
        </div>
        <Map hotelAddress={hotelData.address} />
      </div>
      <div className="selected-trip__translations">
        <div className="selected-trip__translations-common">
          <h1>Common Translations List</h1>
          <ul>
            {translations.map((translation, index) => {
              return <TranslationCard translation={translation} key={index} />;
            })}
          </ul>
        </div>
        <div className="selected-trip__translations-custom">
          <h1>
            Custom Translation to{" "}
            {languageName[props.trip.destination_country_id] ||
              "Local Language"}
          </h1>
          <form onSubmit={translateInput}>
            <div>
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
            </div>
            <button type="submit">Translate</button>
          </form>
        </div>
      </div>
    </div>
  );
}
