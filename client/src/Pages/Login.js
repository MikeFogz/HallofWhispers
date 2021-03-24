import "./Login.css";
import React, { useState } from 'react';
// import axios from "axios";
// import AccountContext from "../Context/AccountContext";
// import { useHistory } from "react-router-dom";
// import LoginForm from "../Components/LoginForm/LoginForm"
//Using useEffect for jumping between pages when logged in and not
//import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
// import RegisterForm from "../Components/RegisterForm/RegisterForm"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import LoginForm from "../Components/LoginForm/LoginForm";
import background from "../assets/images/vintage-concrete.png"

const Login = () => {
  const [formMode, setFormMode] = useState("login")

  const toggleForm = () => {
    // alert("this is a test")
    if (formMode === "login") {
      setFormMode("register")
    } else {
      setFormMode("login")
    }
  }
  //--------------------------------------------
  //Activate this block of code when appropriate
  //Function:  If the user is logged in, will go
  //straight to the home page.

  // useEffect(() => {
  //   if (userData.account) history.goBack();
  // }, [userData.account, history])

  //-----------------------------------------------

  // function RegisterView() {
  //   const location = useLocation();
  //   console.log(location.pathname);
  //   return location.pathname;
  // }

  // RegisterView();



  //  Classname in state. 
  // if this is active then show
  // if the login isclicked than active

  return (
    <>
      <div className="page_container"  style={{ backgroundImage: `url(${background})` }}>
        <div className="d-flex justify-content-center h-100">

          {/* start card container */}
          <div className="user_card">
            {/* start card logo container */}
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src="https://i.imgur.com/BGhAyqD.png" className="brand_logo" alt="HallofWhispersLogo" />
              </div>
            </div>
            {/* end card logo container */}
            <div className="d-flex justify-content-center form_container">

              <div>

                {/* import forms for auth */}
                {formMode === "login" ? < LoginForm formMode={formMode} toggleForm={toggleForm} /> : <RegisterForm formMode={formMode} toggleForm={toggleForm} />}

              </div>
            </div>

          </div>
          {/* end card container */}
        </div>
      </div>
    </>
    // end jsx
  );
};

export default Login;
