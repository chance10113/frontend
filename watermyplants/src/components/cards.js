import React from 'react';

const PlantCard = props => {

    return (
        <div className='card-container'>
            <div className='card'>
                <h4>Nickname: {props.name}</h4>
                <h4>Species: {props.species}</h4>
                <form></form>
                <button>Edit</button>
                {/* Testing */}
                <button>Delete</button> 
                {/* The delete button should delete the given card, the edit button should take you into another page. */}
            </div>
        </div>
    )
}

export default PlantCard