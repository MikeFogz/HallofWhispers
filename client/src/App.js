// import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Wrapper from "./Components/Wrapper/Wrapper";
import Character from "./Pages/Character";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/TestPages/Register";
import AccountContext from "./Context/AccountContext";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({
    account: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    } else {
      try {
        console.log("need to code get user info")
        const accountRes = await axios.get("/api/accounts", {
          headers: { "x-auth-token": token },
        });
        setUserData({ token, account: accountRes.data });
      } catch (err) {
        console.log("User must login");
      }
    }
  }

  const onClick = (e) => {
    e.preventDefault();
    setUserData({ token: undefined, account: undefined });
    localStorage.setItem("auth-token", "");
    //better way of doing this? 
    window.location = "/login"
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);


  return (
    <div className="App">
      <Wrapper>
        <Nav>
          <button onClick={onClick}>Logout</button>
        </Nav>
        <Router>
          <AccountContext.Provider value={{ userData, setUserData }}>
            <Switch>
              <Route exact path="/register" >
                <Register />
              </Route>
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
          </AccountContext.Provider>
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
