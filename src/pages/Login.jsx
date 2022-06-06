import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [isAuth, setisAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password,
      },
    }).then((res) => {
      // alert("sucess");
      setisAuth(!isAuth);
      navigate("/");
    });
  };
  return (
    <div>
      <input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        data-cy="login-email"
      />
      <input
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        data-cy="login-password"
      />
      <button onClick={handleClick} data-cy="login-submit">
        Login
      </button>
    </div>
  );
};

export default Login;
