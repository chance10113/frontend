// Register here
// Link to Login
// Fields for username, password, phone number
/// url/register

import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

const Register = (props) => {
  const { value, submit, change, pageChange } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="register-container">
      <h1> Welcome to Water My Plants Registration!</h1>

      <form className="Register-Form">
        <label>
          <input
            name="username"
            type="text"
            onChange={onChange}
            value={value.username}
            placeholder="Username"
          />
        </label>
        <label>
          <input
            name="password"
            type="text"
            onChange={onChange}
            value={value.password}
            placeholder="Password"
          />
        </label>
        <label>
          <input
            name="phoneNumber"
            type="text"
            onChange={onChange}
            value={valuelue.password}
            placeholder="Phone Number"
          />
        </label>
        <button className="submit-btn"> Register </button>
      </form>
    </div>
  );
};
