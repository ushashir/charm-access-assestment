import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import axios from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");
  console.log(email, password);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    loginErr("")
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("api/login", {
          email: email,
          password: password,
        });
        console.log(response)
      } catch (error) {
        setLoginErr(error.response.data.msg);
      }
    };

  return (
    <div>
      <h1>Login page</h1>
      <form>
        <label>Email</label>
        <input
          type={email}
          onChange={handleEmail}
          value={email}
          required
        ></input>
        <label>Password</label>
        <input
          type={password}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
