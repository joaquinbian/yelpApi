import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MainPage from "./components/mainPage/MainPage";
import "./app.scss";

function App() {
  return (
    <div className="appContainer">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
