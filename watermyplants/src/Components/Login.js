import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";
import "./style.css";

// Styled-Components
const StyledTopDiv = styled.div`
  background-image: url("https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym90YW5pY2FsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  height: 50%;
  width: 100%;
  margin: -5% auto 0 auto;
`;

const StyledLoginContainer = styled.div`
  color: black;
  height: 43rem;
  width: auto;
  background-color: #e4fde1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1px 1px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledH1 = styled.div`
  margin: 0% 0% 0% 0%;
`;

const StyledForm = styled.form`
  height: auto;
  background-color: #e4fde1;
`;

const StyledInputs = styled.div`
  color: black;
  height: auto;
  width: auto;
  background-color: #6ba292;
  background-image: url("https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Ym90YW5pY2FsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 ");
  display: flex;
  border: 4.5px solid #223f36;
  box-shadow: 0.8rem 0.8rem gray;
  align-items: center;
  justify-content: space-evenly;
  text-align: match-parent;
  padding: 5% 5% 5% 5%;
  margin: 0% 0% 0% 0%;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledLabel = styled.div`
  color: white;
  margin: 0% auto 0% auto;
`;

const StyledButton = styled.div`
  background-color: #6ba292;
  margin: 0% auto 2% auto;
`;

const StyledRegisterLink = styled.div`
  margin: 10% auto -7% auto;
`;

// Import yup
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

// Refactor this code to put in App.js what should be there
const Login = () => {
  const initialFormValues = {
    username: "",
    password: "",
  };
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
      .post("https://water-my-plants-four.herokuapp.com/auth/login", value)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        push("/home");
        setValue(initialFormValues);
      })
      .catch((err) => {
        console.log("Login Axios error", err.response);
      });
  };

  return (
    <StyledLoginContainer>
      <StyledTopDiv></StyledTopDiv>
      <StyledH1>
        <h1> Welcome to Water My Plants Login! </h1>
      </StyledH1>
      <StyledForm className="login-form" onSubmit={login}>
        <StyledInputs>
          <StyledLabel>
            <label>
              Username
              <br></br>
              <input
                name="username"
                type="text"
                onChange={onChange}
                value={value.username}
                placeholder="Username"
              />
            </label>
          </StyledLabel>
          <StyledLabel>
            <label>
              Password
              <br></br>
              <input
                name="password"
                type="password"
                onChange={onChange}
                value={value.password}
                placeholder="Password"
              />
            </label>
          </StyledLabel>
          <StyledButton>
            <button disabled={disabled} className="submit-btn">
              Login
            </button>
          </StyledButton>
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
