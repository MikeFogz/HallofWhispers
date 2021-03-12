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
            <Route>
              <Character path="/character" component={Character} />
            </Route>
            <Route>
              <Home path="/home" component={Home} />
            </Route>
            <Route>
              <Login path="/login" component={Login} />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
