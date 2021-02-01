// Register here
// Link to Login
// Fields for username, password, phone number
/// url/register

import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

export default function Register(props)  {
  const { value, submit, change, disabled, pageChange } = props;

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
            value={value.password}
            placeholder="Phone Number"
          />
        </label>
        <button disabled={disabled} className="submit-btn"> Register </button>
        <div className="errors">
            <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{errors.phoneNumber}</div>
        </div>
      </form>
    </div>
  );
};