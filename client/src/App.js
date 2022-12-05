import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";
import {
  LandingPage,
  LoginPage,
  RegistrationPage,
  HomePage,
  PageNotFound,
} from "./pages";

export const API_prefix = "http://localhost:8080";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={(props) => <LoginPage {...props} />} />
        <Route
          path="/register"
          component={(props) => <RegistrationPage {...props} />}
        />
        <Route path="/home" component={(props) => <HomePage {...props} />} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
    </>
  );
}
