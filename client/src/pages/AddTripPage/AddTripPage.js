import axios from "axios";
import { API_prefix } from "../../App";

export default function AddTripPage() {
  const handleSubmit = () => {
    axios
      .get(`${API_prefix}/trips/new-trip`, {
        params: {
          date_start: "2022-12-20",
          date_end: "2022-12-30",
          destination_country_id: 4,
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
    <form onSubmit={handleSubmit}>
      <button type="submit">Create trip</button>
    </form>
  );
}
