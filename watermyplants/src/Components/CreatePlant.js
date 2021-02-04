import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import axiosWithAuth from "../Util/axiosWithAuth";

const schema = yup.object().shape({
  user_id: yup
    .string()
    .required("An Id is required")
    .min(1, "This Id needs to be at least 1 character long"),
  nickName: yup
    .string()
    .required("A Nickname is required")
    .min(2, "This nickname needs to be at least 2 chars long"),
  species: yup
    .string()
    .required("A species is required")
    .min(4, "This species needs to be at least 4 chars long"),
  h2oFrequency: yup
    .string()
    .required("An H2o-Frequency is required")
    .min(1, "This h2oFrequency needs to be at least 1 chars long"),
});

// Component to create plant
const CreatePlant = (props) => {
    // console.log(props)
  const initialFormValues = {
    user_id: Date.now(),
    nickname: "",
    species: "",
    h2o_frequency: "",
    image_url: "",
  };

  const initialFormErrors = {
    user_id: "",
    nickname: "",
    species: "",
    h2o_frequency: "",
    image_url: "",
  };


  const [value, setValue] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(initialFormErrors);


//   useEffect(() => {
//     schema.isValid(value).then((valid) => setDisabled(!valid));
//   }, [value]);

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    console.log(value)
  };


      const postPlant = (e) => {
          e.preventDefault();
          let newPlant;
          axiosWithAuth()
          .post('https://water-my-plants-four.herokuapp.com/plants', newPlant)
          .then(res=>{
            console.log(res.data)
          })
          
          .catch(err=>{
              console.log('Create plant error', err.response)
          })
      }
  

  return (
    <div>
      <StyledForm onSubmit={postPlant}>
        {/* Still need the onSubmit here. */}
        <label>
          Nickname:
          <input
            name="nickname"
            type="text"
            onChange={onChange}
            value={value.nickname}
            placeholder="Nickname"
          />
        </label>
        <label>
          Species:
          <input
            name="species"
            type="text"
            onChange={onChange}
            value={value.species}
            placeholder="Species"
          />
        </label>
        <label>
          H2O:
          <input
            name="h2o_frequency"
            type="text"
            onChange={onChange}
            value={value.h2o_frequency}
            placeholder="H2o-Frequency"
          />
        </label>
        <label>
          Image:
          <input
            name="image_url"
            type="text"
            onChange={onChange}
            value={value.image_url}
            placeholder="Image: optional"
          />
        </label>
        {/* <button disabled={disabled} className="submit-btn"> */}
        <button>
          Add Plant
        </button>
        <div>{errors.nickName}</div>
        <div>{errors.species}</div>
        <div>{errors.h2oFrequency}</div>
        <div>{errors.id}</div>
      </StyledForm>
    </div>
  );
};
export default CreatePlant;

const StyledForm = styled.form``;
