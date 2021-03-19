import "./Login.css";
import React from 'react';
// import axios from "axios";
// import AccountContext from "../Context/AccountContext";
// import { useHistory } from "react-router-dom";
import LoginForm from "../Components/LoginForm/LoginForm"
//Using useEffect for jumping between pages when logged in and not
//import React, { useState, useContext, useEffect } from 'react';

// NOTES/TODO: Rather than oj background color on 
//  card container make it parchment/textured

// Refactor into component for register & login. Container can stay the same,
// just add one more input field

// TODO page needs to be 100% of height of page.

const Login = () => {
  // const [form, setForm] = useState();
  // const { userData, setUserData } = useContext(AccountContext);
  // const history = useHistory();

  // const onChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // }
  // const submitLoginForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(form);
  //     const { data } = await axios.post("/api/login", form);
  //     console.log(data);
  //     //Setting the global user data here
  //     setUserData({
  //       token: data.token,
  //       account: data.account
  //     });

  //     //Saving the token to local storage.  This token expires in 24 hours.
  //     localStorage.setItem("auth-token", data.token);
  //     history.push("/");

  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  //--------------------------------------------
  //Activate this block of code when appropriate
  //Function:  If the user is logged in, will go
  //straight to the home page.

  // useEffect(() => {
  //   if (userData.account) history.goBack();
  // }, [userData.account, history])

  //-----------------------------------------------
  return (
    <>
      <div className="page_container">
        <div className="d-flex justify-content-center h-100">

          {/* start card container */}
          <div className="user_card">
            {/* start card logo container */}
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src="https://cdn.worldvectorlogo.com/logos/dragon-optical-1.svg" className="brand_logo" alt="logo" />
              </div>
            </div>
            {/* end card logo container */}
            <div className="d-flex justify-content-center form_container">

              <LoginForm />
              
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
