import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BoxerContainer } from "./components/BoxerContainer";
function App() {
  return (
  <Router> 
    <div>
      <Link to="/boxing">Home Page</Link>
      <Switch>
        <Route path="/boxing">
          <BoxerContainer />
        </Route>
      </Switch>
    </div>
  </Router>
    );
  }

export { App };
