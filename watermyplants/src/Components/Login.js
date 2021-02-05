import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from 'yup';
import styled from "styled-components";
import axios from 'axios';
import "./style.css";
import { LOGIN_URL } from '../Util/Private'

// Styled-Components
const StyledLoginContainer = styled.div`
  color: black;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1px 1px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledForm = styled.form`
  height: auto;
`;

const StyledInputs = styled.div`
  color: black;
  height: auto;
  width: auto;
  display: flex;
  border: 3px solid slategray;
  box-shadow: 0.8rem 0.8rem gray;
  align-items: center;
  justify-content: space-evenly;
  text-align: match-parent;
  padding: 5% 5% 5% 5%;
  margin: 0% 0% 0% 0%;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledRegisterLink = styled.div`
  margin: 10% auto auto auto;
`;

const schema = yup.object().shape({
  username: yup
    .string()
    .required("A username is required")
    .min(4, "The Username needs to be 4 chars long"),
  password: yup
    .string()
    .required("A password is required")
    .min(5, "The password needs to be at least 5 chars long"),
});

const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState(initialFormValues);
  const { push } = useHistory();

  useEffect(() => {
    schema.isValid(value).then((valid) => setDisabled(!valid));
  }, [value]);

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    console.log(value);
  };

  const pageChangeReset = () => {
    setValue(initialFormValues);
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post(LOGIN_URL, value)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/plantlist");
        setValue(initialFormValues);
      })
      .catch((err) => {
        console.log("Login Axios error", err.response);
      });
  };

  return (
    <StyledLoginContainer>
      <h1> Welcome to Water My Plants Login! </h1>
      <StyledForm className="login-form" onSubmit={login}>
        <StyledInputs>
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
              type="pass"
              onChange={onChange}
              value={value.password}
              placeholder="Password"
            />
          </label>
          <button disabled={disabled} className="submit-btn">
            Login
          </button>
        </StyledInputs>
        <div className="errors">
          {/* <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.phoneNumber}</div> */}
        </div>
        <StyledRegisterLink>
          Don't Have An Account?
          <Link to="/register" onClick={pageChangeReset}>
            <br></br>
            Register
          </Link>
        </StyledRegisterLink>
      </StyledForm>
    </StyledLoginContainer>
  );
};
export default Login;
