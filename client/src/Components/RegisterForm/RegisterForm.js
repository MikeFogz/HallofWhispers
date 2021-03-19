import "./RegisterForm.css"
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";



const Register = () => {
  const [form, setForm] = useState();
  const history = useHistory();

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


  // need a hook for password reveal, vanilla js doesn't work
  // const Toggle = () => {
  //   const queryPass = document.getElementById("password-reveal");
  //   if (queryPass.type === "password") {
  //     queryPass.type = "text";
  //   } else {
  //     queryPass.type = "password";
  //   }
  // };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input onChange={onChange} type="text" name="email" className="form-control input_user" placeholder="email" />
        </div>

        {/*  ----------------
        original email input

          <label >Email</label>
        <input onChange={onChange} type="text" name="email" /> 
        
        ----------------
         */}

        {/* display name start */}
        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input onChange={onChange} type="text" name="displayName" className="form-control input_user" placeholder="display name" />
        </div>
        {/* display name end */}



        {/*  --------------------

        original password input
        <label >Password</label>
        <input onChange={onChange} type="text" name="password" /> 
        ---------------------
        */}
        
        {/* password start */}
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
          </div>
          <input onChange={onChange} type="password" name="password" className="form-control input_pass" placeholder="password" />
        </div>
        {/* password end */}

        {/* password check start */}

        {/* TODO: manipulate password reveal
            removed unnecessary password ID in input 
        */}
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
          </div>
          <input onChange={onChange} type="password" name="passwordCheck" className="form-control input_pass" placeholder="retype password" />
        </div>
        {/* password check end */}


        {/*   --- original check password start
        <label >Password Check</label>
        <input onChange={onChange} type="text" name="passwordCheck" /> 
          check password end
        */}




        {/* show password checkbox start */}
        {/* <div class="form-group">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customControlInline" onClick="Toggle"/>
            <label class="custom-control-label" for="customControlInline">&nbsp; Show Password</label>
          </div>
        </div> */}
        {/* show password checkbox end */}
        





        {/* original display name
        
        <label >Display Name</label>
        <input onChange={onChange} type="text" name="displayName" />

        button starts below
        <input type="submit" /> 
        ----------------------
        */}
        {/* button start */}
        <div className="d-flex justify-content-center mt-3 login_container">
          <button type="submit" name="button" className="btn login_btn">Register</button>
        </div>
        {/* button end */}
        
        <div className="d-flex mt-3 justify-content-center links">
          <a href="/register">Register Here</a>
        </div>


      </form>
    </div>
  )
}

export default RegisterForm
