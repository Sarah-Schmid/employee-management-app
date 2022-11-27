import "./index.css";
import EmployeesPage from "./components/employees-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/nav-bar";
import HomePage from "./components/home-page";
import SchedulePage from "./components/schedule-page";

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
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/schedule">
              <SchedulePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
