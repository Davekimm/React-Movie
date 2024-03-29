import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./routes/Detail"

function App(){

  return (<Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movie/:id">
        <Detail/>
      </Route>
    </Switch>
  </Router>)
}

export default App;
