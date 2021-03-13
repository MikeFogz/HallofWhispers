import "./Login.css";
import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
// import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";

// NOTES/TODO: Rather than oj background color on 
//  card container make it parchment/textured

// Refactor into component for register & login. Container can stay the same,
// just add one more input field

// TODO page needs to be 100% of height of page.

const Login = () => {
  const [form, setForm] = useState();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      const { data } = await axios.post("/api/login", form);
      console.log(data);
      //Setting the global user data here
      // setUserData({
      //   token: data.token,
      //   user: data.user
      // });

      //Saving the token to local storage.  This token expires in 24 hours.
      localStorage.setItem("auth-token", data.token);
      // history.push("/")

    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    setForm({});
  }, [])

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

              {/* form start */}
              <form onSubmit={submitLoginForm} >
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input onChange={onChange} type="text" name="email" className="form-control input_user" placeholder="email" />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input onChange={onChange} type="text" name="password" className="form-control input_pass" placeholder="password" />
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">Login</button>
                </div>
                <div className="d-flex mt-3 justify-content-center links">
                  <a href="#">Register Here</a>
                </div>
              </form>
              {/* form end */}
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
