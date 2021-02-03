import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from 'yup';
import styled from "styled-components";
import axios from 'axios';

const schema = yup.object().shape({
    
})

const Home = () => {

    const initialFormValues = {
        id: '',
        nickName:'',
        species: '',
        h2oFrequency: '',
        image: '',
    }


    const [value, setValue] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(true);

    return (
        <div>
            <h1>Pocket Planters</h1>
            <p>I should be hidden if not logged in!</p>
            <StyledForm onSubmit={onSubmit}>
            <label>
                Nickname
                <input
                    name="nickName"
                    type="text"
                    onChange={onChange}
                    value={value.nickName}
                    placeholder="Nickname"
                />
            </label>
            <label>
                Species
                <input
                    name="species"
                    type="text"
                    onChange={onChange}
                    value={value.species}
                    placeholder="Species"
                />
            </label>
            <label>
                H2o-Frequency
                <input
                    name="h2oFrequency"
                    type="text"
                    onChange={onChange}
                    value={value.h2oFrequency}
                    placeholder="H2o-Frequency"
                />
            </label>
            <label>
                Id
                <input 
                    name="id"
                    type="text"
                    onChange={onChange}
                    value={value.id}
                    placeholder="Id"
                />
            </label>
            <label>
                image
                <input 
                    name="image"
                    type="image"
                    alt="Plant Photo"
                    onChange={onChange}
                    value={value.image}
                    placeholder="Image: optional"
                />
            </label>
            <button disabled={disabled} className="submit-btn">
                Add Plant
            </button>
            </StyledForm>
        </div>
    )
}
export default Home;

const StyledForm = styled.form`

`