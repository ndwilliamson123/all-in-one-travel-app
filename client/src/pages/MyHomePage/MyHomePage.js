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
          <h1 className="home__welcome"><i>Welcome, {userHomeData.name}</i></h1>
          <div className="home__return-reqs">
            {/* <p className="home__return-reqs-static">
              Here are your return requirements when you return from a trip:
            </p> */}
            <p className="home__return-reqs-text">
            <span>Here are your return requirements when you return from a trip:</span>{" "}{userHomeData.returnReqs}
            </p>
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
