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

  return (
    <div>
      <form onSubmit={submit}>
        <label >Email</label>
        <input onChange={onChange} type="text" name="email" />
        <label >Password</label>
        <input onChange={onChange} type="text" name="password" />
        <label >Password Check</label>
        <input onChange={onChange} type="text" name="passwordCheck" />
        <label >Display Name</label>
        <input onChange={onChange} type="text" name="displayName" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Register
