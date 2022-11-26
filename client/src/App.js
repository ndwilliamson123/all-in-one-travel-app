import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { LandingPage, LoginPage, PageNotFound } from "./pages";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={(props) => <LoginPage {...props} />} />
        <Route path="/*" component={PageNotFound}/>
      </Switch>
    </>
  );
}
