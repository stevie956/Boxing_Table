import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BoxerList } from "./components/BoxerList";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route path="/boxing/create">
            <h1>Create Entry</h1>
          </Route>
          
          <Route path="/">
            <BoxerList />
          </Route>
        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
