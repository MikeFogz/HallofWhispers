// import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Wrapper from "./Components/Wrapper/Wrapper";
import Character from "./Pages/Character";
import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/TestPages/Register";
import AccountContext from "./Context/AccountContext";
import axios from "axios";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LoginForm from "./Components/LoginForm/LoginForm";


function LoginRegister() {

  const [formMode, setFormMode] = useState("login")

  const toggleForm = () => {
    if (formMode === "login") {
      setFormMode("register")
    } else {
      setFormMode("login")
    }
  }

  return (
    <div>
      <button onClick={toggleForm}>
        {formMode === "login" ? "Sign up here" : "Login here"}
      </button>
      {formMode === "login" ? < LoginForm /> : <RegisterForm />}

    </div>
  )
}


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
        const { data } = await axios.get("/api/accounts", {
          headers: { "x-auth-token": token },
        });
        console.log(data);

        //Setting up account data for state
        const accountData = {
          accountName: data.accountName,
          id: data._id,
          charCreated: data.charCreated,
          loggedIn: true
        }
        setUserData({ token, account: accountData });
      } catch (err) {
        console.log("User must login");
      }
    }
  }

  const onClick = (e) => {
    e.preventDefault();
    setUserData({ token: undefined, account: { loggedIn: false } });
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
        <AccountContext.Provider value={{ userData, setUserData }}>
          <Nav>
            <button onClick={onClick}>Logout</button>
          </Nav>
          <Router>

            <Switch>
              <Route exact path="/character" >
                <Character />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/login">
                <LoginRegister />
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
