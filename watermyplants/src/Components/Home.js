import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from 'yup';
import styled from "styled-components";
import axios from 'axios';
import Cardlist from "./CardList";

const schema = yup.object().shape({
    id: yup.string().required('An Id is required').min(1, 'This Id needs to be at least 1 character long'),
    nickName: yup.string().required('A Nickname is required').min(2, 'This nickname needs to be at least 2 chars long'),
    species: yup.string().required('A species is required').min(4, 'This species needs to be at least 4 chars long'),
    h2oFrequency: yup.string().required('An H2o-Frequency is required').min(1, 'This h2oFrequency needs to be at least 1 chars long'),
});

const Home = () => {

    const initialFormValues = {
        id: '',
        nickName:'',
        species: '',
        h2oFrequency: '',
        image: '',
    }

    const initialFormErrors = {
         id: '', 
         nickName:'', 
         species: '', 
         h2oFrequency: '',
         image: '',
    }

    const [value, setValue] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState(initialFormErrors);

    useEffect(() => {
        schema.isValid(value).then(valid => setDisabled(!valid))
      }, [value])

    const onChange = e => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
            //Need to figure out if the input type of image needs something else here.
        })
    }

    return (
        <div>
            <header>
            <h1>Pocket Planters</h1>
            </header>
            {/* <p>I should be hidden if not logged in!</p> */}
            <body>
            <Cardlist />
            </body>
            <footer>
            <StyledForm> 
                {/* Still need the onSubmit here. */}
            <label>
                Nickname:
                <input
                    name="nickName"
                    type="text"
                    onChange={onChange}
                    value={value.nickName}
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
                H2o:
                <input
                    name="h2oFrequency"
                    type="text"
                    onChange={onChange}
                    value={value.h2oFrequency}
                    placeholder="H2o-Frequency"
                />
            </label>
            <label>
                Id:
                <input 
                    name="id"
                    type="text"
                    onChange={onChange}
                    value={value.id}
                    placeholder="Id"
                />
            </label>
            <label>
                Image:
                <input 
                    name="image"
                    type="text"
                    alt="Plant Photo"
                    onChange={onChange}
                    value={value.image}
                    placeholder="Image: optional"
                />
            </label>
            <button disabled={disabled} className="submit-btn">
                Add Plant
            </button>
                <div>{errors.nickName}</div>
                <div>{errors.species}</div>
                <div>{errors.h2oFrequency}</div>
                <div>{errors.id}</div>
            </StyledForm>
            </footer>
        </div>
    )
}
export default Home;

const StyledForm = styled.form`

`
