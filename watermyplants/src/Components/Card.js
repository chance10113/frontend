import React from 'react';
import styled from "styled-components";


const PlantCard = props => {
    
    const { card } = props

    return (

        <StyledCard>
            <div className='card-container'>
                <div className='card'>
                    <div className='img-container'>
                        <img alt='A plant' src={card.image} />
                    </div>
                    <h4>Nickname: {card.name}</h4>
                    <h4>Species: {card.species}</h4>
                    <h4>H2o Frequency: {card.h2o}</h4>
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