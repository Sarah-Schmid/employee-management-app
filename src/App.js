import "./index.css";
import EmployeesPage from "./components/employees-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/nav-bar";
import HomePage from "./components/home-page";

import Scheduler from "./components/calendar";
import "./App.css";

import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/employees">
              <EmployeesPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/calendar">
              <Scheduler />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
