import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
// import * as font from "./fonts"
import axiosWithAuth from '../Util/axiosWithAuth'

// Delete axios request here
// 
const PlantCard = props => {

    // const deltePlant = (plant) => {
    //     axiosWithAuth()
    //     .delete(`https://water-my-plants-four.herokuapp.com/plants/${plant.id}`)
    //     .then(res => {
    //         console.log(res)
    //         console.log(plant)
    //     })
    //     .catch(err => {
    //         console.log(plant)
    //         console.log("delete function error", err.response)
    //     })
    // };
    
    return (

        <StyledCard>
            <div className='card-container'>
                <div className='card'>
                    <div className='img-container'>
                        <img alt='A plant' src={props.image} />
                    </div>
                    <h4>Nickname: {props.name}</h4>
                    <h4>Species: {props.species}</h4>
                    <h4>H2o Frequency: {props.h2o}</h4>
                    <button>Edit</button>
                    {/* An edit button that allows one to update the plant object. */}
                    <button>Delete</button>
                    {/* The delete button should delete the given card. */}
                </div>
            </div>
        </StyledCard>
    );
}

export default PlantCard

const StyledCard = styled.div`
`