import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import HomePage from "./pages/HomePage";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail-movie/:id" component={MovieDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
