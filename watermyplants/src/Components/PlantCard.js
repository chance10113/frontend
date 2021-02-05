import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from '../Util/axiosWithAuth'



const PlantCard = props => {

    const {push} = useHistory()

  
    const deletePlant = (delPlant) => {
        axiosWithAuth()
        .delete(`https://water-my-plants-four.herokuapp.com/plants/${delPlant.id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
            const newPlantList = props.plant.filter(plant => plant.id !== delPlant.id )
            props.setPlants(newPlantList)
            push('/home')   
        })
        .catch(err => {
            console.log("delete function error", err.response)
        })
    };
    // What's this edit
    const editPlant = () => {
        push(`/editplant:${props.plant.id}`)
    }
  
    return (

        <StyledCard>
        <div className='card-container'>
            <div className='card'>
                <div className='img-container'>
                    <img alt='A plant' src={props.plant.image_url} />
                </div>
                <h4>Nickname: {props.plant.nickname}</h4>
                <h4>Species: {props.plant.species}</h4>
                <h4>H2o Frequency: {props.plant.h2o_frequency}</h4>
                <button onClick={editPlant}>Edit</button>
                {/* An edit button that allows one to update the plant object. */}
                <button onClick={() => deletePlant(props.plant)}>Delete</button>
                {/* The delete button should delete the given card. */}
            </div>
        </div>
    </StyledCard>
    );
}

export default PlantCard

const StyledCard = styled.div`
`