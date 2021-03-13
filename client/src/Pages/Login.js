import React from "react";
import "./Login.css";

// NOTES/TODO: Rather than oj background color on 
//  card container make it parchment/textured

// Refactor into component for register & login. Container can stay the same,
// just add one more input field

// TODO page needs to be 100% of height of page.

const Login = () => {

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
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" name="" className="form-control input_user" value="" placeholder="username" />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" name="" className="form-control input_pass" value="" placeholder="password" />
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" className="btn login_btn">Login</button>
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
