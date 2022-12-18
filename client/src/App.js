import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  LandingPage,
  LoginPage,
  RegistrationPage,
  MyHomePage,
  PageNotFound,
  MyProfilePage,
} from "./pages";

export const API_prefix = "http://localhost:8080";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route
            path="/login"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={(props) => <RegistrationPage {...props} />}
          />
          <Route
            path="/home"
            component={(props) => <MyHomePage {...props} />}
          />
          <Route
            path="/profile"
            component={(props) => <MyProfilePage {...props} />}
          />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
