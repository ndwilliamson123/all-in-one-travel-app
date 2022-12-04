import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { LandingPage, LoginPage, HomePage, TripsPage, PageNotFound } from "./pages";

export default function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={(props) => <LoginPage {...props} />} />
        <Route path="/home" component={(props) => <HomePage {...props} />}/>
        <Route path="/trips" component={(props) => <TripsPage {...props} />}/>
        <Route path="/*" component={PageNotFound}/>
      </Switch>
    </>
  );
}
