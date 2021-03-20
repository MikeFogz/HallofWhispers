import React, { useContext, useEffect } from "react";
import "./Nav.css";
import AccountContext from "../../Context/AccountContext";

const Nav = ({ children }) => {


  const { userData } = useContext(AccountContext);

  // let token = localStorage.getItem("auth-token");
  // //this is to hide the Characters page in Nav Bar
  // let loggedIn = (token !== "");
  // console.log("I am logged in: ", loggedIn);

  return (
    <nav className="navbar navbar-expand-lg navbar-light background">
      <div className="container-fluid background">
        <a className="navbar-brand" href="/">
          Hall of Whispers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home" hidden={!userData.account?.charCreated}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/character" hidden={!userData.account?.loggedIn}>
                Character
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item login">
              <a className="nav-link" href="/login">
                Login
              </a>
              {children}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
