import React from "react";
// import image from "http://placekitten.com/250/50"
const Login = () => {
  const styles = {
    imageStyles: {
      width: "250px",
    },
    formStyles: {
      display: "inline-block",
      padding: "32px 48px 0px 48px", 
      border: "1px solid #EEE",
    },
    passwordStyles: {
      float: "right",
    },
  }
  return (
    <div>
      <center>
        <img
          className="responsive-img"
          style={styles.imageStyles}
          alt="book"
        />
        <div className="section"></div>

        <h5 className="indigo-text">Please, login into your account</h5>
        <div className="section"></div>

        <div className="container">
          <div
            className="z-depth-1 grey lighten-4 row custom-style"
            style={styles.formStyles}
          >
            <form className="col s12" method="post">
              <div className="row">
                <div className="col s12"></div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <label for="email">Enter your email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <label for="password">Enter your password</label>
                </div>
                <label style={styles.formStyles}>
                  <a className="pink-text" href="#!">
                    <b>Forgot Password?</b>
                  </a>
                </label>
              </div>

              <br />
              <center>
                <div className="row">
                  <button
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo"
                  >
                    Login
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <a href="#!">Create account</a>
      </center>
    </div>
  );
};

export default Login;
