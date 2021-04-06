import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BoxerList } from "./components/BoxerList";
import { BoxerEdit } from "./components/BoxerEdit";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route exact path="/boxing/create">
            <h1>Create Entry</h1>
          </Route>

          <Route exact path="/boxing/edit/:id">
            <BoxerEdit />
          </Route>
          
          <Route exact path="/">
            <BoxerList />
          </Route>
      
        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
