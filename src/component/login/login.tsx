import React, { useState } from "react";
import "./login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const mindBlowing = require("../../image/login/mindBlowing.gif");

  console.log(mindBlowing.default);

  return (
    <div
      className="login-container"
      onKeyPress={(e) => {
        console.log(e.charCode);
      }}
    >
      <div className="left">
        <img src={mindBlowing.default} />
      </div>

      <div className="right">
        <div className="login-input-group">
          <div className="username-container">
            <div className="username-text">Username:</div>
            <input
              className="username-field"
              onChange={(e) => {
                setUserName(e.target.value);
                console.log(userName);
              }}
            />
          </div>

          <div className="password-container">
            <div className="password-text">Password:</div>
            <div className="password-field-container">
              <input
                className="password-field"
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(password);
                }}
              />
              <div
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="show-hide-pw-btn"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
