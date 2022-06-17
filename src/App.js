import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Tesla } from "./Tesla";
import { Bmw } from "./Bmw";
import { Benz } from "./Benz";
import { Tata } from "./Tata";
import { Hyundai } from "./Hyundai";
import { Jaguar } from "./Jaguar";
import Nav from "./Nav";
import { About } from "./About";
import { RollRoyce } from "./RollRoyce";
import { Menu } from "./Menu";
import { Login } from "./Login";
import { Booking } from "./Booking";
import { Sign } from "./Sign";
import { useHistory } from "react-router-dom";
import { Home } from "./Home";

//router component
export default function App() {
  //Defining Routes for all the components and pages
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tesla">
            <Tesla />
          </Route>
          <Route path="/rolls">
            <RollRoyce />
          </Route>
          <Route path="/bmw">
            <Bmw />
          </Route>
          <Route path="/benz">
            <Benz />
          </Route>
          <Route path="/jaguar">
            <Jaguar />
          </Route>
          <Route path="/tata">
            <Tata />
          </Route>
          <Route path="/hyundai">
            <Hyundai />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/book">
            <Booking />
          </Route>
          <Route path="/signup">
            <Sign />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
