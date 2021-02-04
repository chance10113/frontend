import React from 'react';

const EditUser = () => {

    const handleChange = e => {

    }
    const handleSubmit = e => {

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='password'
                name='password'
                onChange={handleChange}
                value={}

                />
                    <input
                type='num'
                name='number'
                onChange={handleChange}
                value={}

                />
            </form>
        </div>
    )
}
export default EditUser;