import "./MyHomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { SelectedTripPage, AddTripPage } from "../index";
import { TripList } from "../../components";
import { API_prefix } from "../../App";
import { useHistory, Switch, Route } from "react-router-dom";

export default function HomePage() {
  const [userHomeData, setUserHomeData] = useState({});
  const [selectedTrip, setSelectedTrip] = useState({});
  const history = useHistory();

  const selectTrip = (trip) => {
    console.log(trip);
    setSelectedTrip(trip);
    localStorage.setItem("selectedTrip", JSON.stringify(trip));
  };

  useEffect(() => {
    axios
      .get(`${API_prefix}/home`, { withCredentials: true })
      .then((response) => {
        setUserHomeData(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        if (error.response.status === 401) {
          history.push("/login");
        }
      });
  }, [history]);

  return (
    <Switch>
      <Route exact path="/home">
        <div className="home">
          <h1 className="home__welcome">Welcome, {userHomeData.name}</h1>
          <div>
            <p>{`Here are your return requirements when you return home!`}</p>
            <p>{userHomeData.countryName}:</p>
            <p>{userHomeData.returnReqs}</p>
          </div>
          <TripList selectTrip={selectTrip} />
        </div>
      </Route>
      <Route
        path="/home/trip/:tripId"
        component={(props) => (
          <SelectedTripPage {...props} trip={selectedTrip} />
        )}
      />
      <Route path="/home/add-trip" component={AddTripPage} />
    </Switch>
  );
}
