import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Card from "./Card";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/card">Card</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/card" component={Card} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
