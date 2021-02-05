import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";
import "./style.css";
import { REGISTER_URL } from '../Util/Private'

// Styled-Components
const StyledRegisterContainer = styled.div`
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

const StyledLoginLink = styled.div`
  margin: 10% auto auto auto;
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

const initialFormValues = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
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
      .post(REGISTER_URL, value)
      .then((res) => {
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
            Email
            <input
              name="email"
              type="email"
              onChange={onChange}
              value={value.email}
              placeholder="Email"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              onChange={onChange}
              value={value.password}
              placeholder="Password"
            />
          </label>
          <button disabled={disabled} className="submit-btn">
            Register
          </button>
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
