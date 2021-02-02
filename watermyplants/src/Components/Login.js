import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

export default function Login(props) {
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
    <div className="login-container">
      <h1> Welcome to Water My Plants Login! </h1>
      <form className="login-form" onSubmit={onSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
            onChange={onChange}
            value={value.username}
            placeholder="Username"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="input"
            onChange={onChange}
            value={value.password}
            placeholder="Password"
          />
        </label>
        <label>
          Phone Number
          <input
            name="phoneNumber"
            type="text"
            onChange={onChange}
            value={value.password}
            placeholder="Phone Number"
          />
        </label>
        <button disabled={disabled} className="submit-btn">
          Login
        </button>
        <div className="errors">
          {/* <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{errors.phoneNumber}</div> */}
        </div>
        <div>
          Don't Have An Account?
          <Link to="/register" onClick={pageChange}>
            <br></br>
            Login
          </Link>
          </div>
      </form>
    </div>
  );
}

// url/