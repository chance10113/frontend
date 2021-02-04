import React from 'react';

// To edit plant, prop drill formValue state from Card.js
// Change that state on the handleChange function
// Submit that Changed state as an axios(withAuth) put request
// Prop drill changed Plant state to update Plant list
// Push back to Home Component

const EditPlant = () => {

    const handleChange = e => {

    }
    const handleSubmit = e => {

    }
    return(
        <div>
         <form onSubmit={handleSubmit}>
             <input 
             type='text'
             name='nickname'
             value={}
             onChange={handleChange} 
             />
               <input 
             type='text'
             name='species'
             value={}
             onChange={handleChange} 
             />
             <input 
             type='text'
             name='H2O'
             value={}
             onChange={handleChange} 
             />
             <button onSubmit={handleSubmit}>Edit Plant</button>

         </form>
        </div>
    )
}
export default EditPlant;