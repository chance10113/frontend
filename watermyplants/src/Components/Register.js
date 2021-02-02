import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';
// import styled from "styled-components";

const [disabled, setDisabled] = useState(true)

const schema = yup.object().shape({
  username: yup.string().required('A username is required').min(4, 'The Username needs to be 4 chars long'),
  password: yup.string().required('A password is required').min(5, 'The password needs to be at least 5 chars long'),
  phonenumber: yup.string().required('A phone is required').min(10, 'Your phone number needs to be at least 10 chars long'),
})

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

      <form className="Register-Form" onSubmit={onSubmit}>
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
            type="text"
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
          Register
        </button>
        <div className="errors">
          {/* <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{errors.phoneNumber}</div> */}
        </div>
        <div>
          Already Have An Account?
          <Link to="/" onClick={pageChange}>
            <br></br>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

/// url/register
