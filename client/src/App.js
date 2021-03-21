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
    pending: true,
  });


  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (!token) {
      setUserData({ ...userData, pending: false });
      localStorage.setItem("auth-token", "");
    } else {
      try {
        const { data } = await axios.get("/api/accounts", {
          headers: { "x-auth-token": token },
        });
        setUserData({ token, account: data, pending: false });
      } catch (err) {
        console.log("User must login");
      }
    }
  }

  //Logout function
  const onClick = (e) => {
    e.preventDefault();
    setUserData({ token: undefined, account: undefined, pending: false });
    localStorage.removeItem("auth-token");
    //better way of doing this? 
    window.location = "/login"
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);


  return (
    <div className="App">
      <Wrapper>
        <AccountContext.Provider value={{ userData, setUserData }}>
          <Nav>
            <button onClick={onClick}>Logout</button>
          </Nav>
          <Router>
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
          </Router>
        </AccountContext.Provider>
      </Wrapper>
    </div>
  );
}

export default App;
