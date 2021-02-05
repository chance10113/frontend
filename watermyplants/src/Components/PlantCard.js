import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from '../Util/axiosWithAuth'



const PlantCard = ({ plant, setPlants})  => {

    const { push } = useHistory()

    const deletePlant = (delPlant) => {
        axiosWithAuth()
        .delete(`https://water-my-plants-four.herokuapp.com/plants/${delPlant.id}`)
        .then(res => {
            console.log(res.data)
            return axiosWithAuth().get("https://water-my-plants-four.herokuapp.com/plants")
        })
        .then(res =>{
            setPlants(res.data)
            console.log('Deleted', res)
        })
        .catch(err => {
            console.log("delete function error", err.response)
        })
    };

    // What's this edit
    const editPlant = () => {
        push(`/editplant:${plant.id}`)
    }
  
    return (

        <StyledCard>
        <div className='card-container'>
            <div className='card'>
                <div className='img-container'>
                    <img alt='A plant' src={plant.image_url} />
                </div>
                <h4>Nickname: {plant.nickname}</h4>
                <h4>Species: {plant.species}</h4>
                <h4>H2o Frequency: {plant.h2o_frequency}</h4>
                <button onClick={editPlant}>Edit</button>
                {/* An edit button that allows one to update the plant object. */}
                <button onClick={() => deletePlant(plant)}>Delete</button>
                {/* The delete button should delete the given card. */}
            </div>
        </div>
    </StyledCard>
    );
}

export default PlantCard

const StyledCard = styled.div`
border: 1px dashed black;
img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
}
`