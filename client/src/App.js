// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Wrapper from "./Components/Wrapper/Wrapper";
import Character from "./Pages/Character";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/character" >
              <Character />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
