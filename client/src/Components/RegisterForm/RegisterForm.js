import "./RegisterForm.css"
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";



const RegisterForm = () => {
  const [form, setForm] = useState();
  const history = useHistory();
  const [passwordToggle, setPasswordToggle] = useState("password");

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await axios.post("/api/register", form);
      console.log(newUser);
      history.push("/login");

    } catch (error) {
      console.log(error.response);
    }
  }

    const togglePassword = () => {
      if (passwordToggle==="password") {
        setPasswordToggle("text")
      
      }
      else {
        setPasswordToggle("password")
      }
    };

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

      <form onSubmit={submit}>
        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input onChange={onChange} type="text" name="email" className="form-control input_user" placeholder="email" />
        </div>

        {/* display name start */}
        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input onChange={onChange} type="text" name="displayName" className="form-control input_user" placeholder="display name" />
        </div>
        {/* display name end */}
        
        {/* password start */}
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
          </div>
          <input onChange={onChange} type={passwordToggle} name="password" className="form-control input_pass" placeholder="password" />
        </div>
        {/* password end */}

        {/* password check start */}
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
          </div>
          <input onChange={onChange} type={passwordToggle} name="passwordCheck" className="form-control input_pass" placeholder="retype password" />
        </div>
        {/* password check end */}

        {/* show password checkbox start */}
        <div class="form-group">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customControlInline" onClick={togglePassword}/>
            <label class="custom-control-label" for="customControlInline">&nbsp; Show Password</label>
          </div>
        </div> 
        {/* show password checkbox end */}
        

        {/* button start */}
        <div className="d-flex justify-content-center mt-3 login_container">
          <button type="submit" name="button" className="btn login_btn">Register</button>
        </div>
        {/* button end */}
        
      </form>
    
          </div>

        </div>
        {/* end card container */}
      </div>
      </div>
    
    </>
  )
}

export default RegisterForm

