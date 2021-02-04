import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";
import "./style.css";

// Styled-Components
const StyledRegisterContainer = styled.div`
  color: black;
  height: 20rem;
  width: auto;
  //background-color: ;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1px 1px;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: blue;
  background-image:url("https://images.unsplash.com/photo-1579167728798-a1cf3d595960?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym90YW5pY2FsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size:contain;
  background-repeat:round ;
`;

const StyledForm = styled.form`
  height: auto;
  /* background-color: red; */
  width:25%;
  margin: auto auto auto auto ;
  padding: 1% 0% 0% 5%;

`;

const StyledInputs = styled.div`
  color: black;
  /* background-color: yellow; */
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

const StyledLabel = styled.div`
  background-color: #6ba292 ;
`;

const StyledButton = styled.div`
background-color: #6ba292 ;
`

const StyledLoginLink = styled.div`
  width:auto;
  margin: 10% auto auto auto;
  /* background-color:antiquewhite; */
`;

const schema = yup.object().shape({
  username: yup
    .string()
    .required("A username is required")
    .min(4, "The Username needs to be 4 chars long"),
  email: yup.string().required("A email is required"),
  password: yup
    .string()
    .required("A password is required")
    .min(6, "Your password needs to be at least 10 chars long"),
});

// Refactor this code and put in App.js what needs to be there
const Register = () => {
  const initialFormValues = {
    username: "",
    email: "",
    password: "",
  };
  const [value, setValue] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const { push } = useHistory();

  useEffect(() => {
    schema.isValid(value).then((valid) => setDisabled(!valid));
  }, [value]);

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://water-my-plants-four.herokuapp.com/auth/register", value)
      .then((res) => {
        // When we submit register page, do we need token?
        // Push to login page?
        console.log(res);
        window.alert("User account creation: Successful!");
        push("/");
      })
      .catch((err) => {
        console.log("Login Axios error", err.response);
      });
  };

  const pageChangeReset = () => {
    setValue(initialFormValues);
  };

  return (
    <StyledRegisterContainer>
      <h1> Welcome to Water My Plants Registration!</h1>
      <StyledForm onSubmit={onSubmit}>
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
              Email
              <br></br>
              <input
                name="email"
                type="email"
                onChange={onChange}
                value={value.email}
                placeholder="Email"
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
            Register
          </button>
          </StyledButton>
        </StyledInputs>
        <div className="errors">
          {/* <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.phoneNumber}</div> */}
        </div>
        <StyledLoginLink>
          Already Have An Account?
          <Link to="/" onClick={pageChangeReset}>
            <br></br>
            Login
          </Link>
        </StyledLoginLink>
      </StyledForm>
    </StyledRegisterContainer>
  );
};
export default Register;
