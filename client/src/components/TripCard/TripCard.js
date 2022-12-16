import "./TripCard.scss";
import { useHistory, Link } from "react-router-dom";

const months = [
  null,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const countries = [
  null,
  "Canada",
  "United States of America",
  "France",
  "Spain",
];

export default function TripCard({ trip, index, clickCard }) {
  const history = useHistory();

  const handleClick = () => {
    clickCard(index);
  };

  const { destination_country_id, date_start, date_end } = trip;

  const startDay = date_start.substring(8, 10);
  let startMonth = date_start.substring(5, 7);
  const startYear = date_start.substring(0, 4);

  const endDay = date_end.substring(8, 10);
  let endMonth = date_end.substring(5, 7);
  const endYear = date_end.substring(0, 4);

  if (startMonth[0] === "0") {
    startMonth = startMonth[1];
  }

  if (endMonth[0] === "0") {
    endMonth = endMonth[1];
  }

  return (
    <li className="trip-card" onClick={handleClick}>
      <Link to={`/home/trip/${trip.id}`}>
        <h1 className="trip-card__destination">
          {countries[destination_country_id]}
        </h1>
        <div className="trip-card__duration">
          {`From ${months[startMonth]} ${startDay}, ${startYear} until ${months[endMonth]} ${endDay}, ${endYear}`}
        </div>
      </Link>
    </li>
  );
}
