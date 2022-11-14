import "./index.css";
import EmployeesPage from "./components/employees-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/employees">
              <EmployeesPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
