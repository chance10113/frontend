import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const initialFormValues = {
        username: '',
        password: '',
    }
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }
    const {push} = useHistory();
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('')
        .then(res=>{
            localStorage.setItem('token', res.data.payload)
            push('/home')
        })
        .catch(err=>{
            console.log('Login Axios error', err.response)
        })
        
    }

    
    return (
        <div>
            <h2>Hello, from Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input
                    type='text'
                    value={formValues.username}
                    onChange={handleChange}
                    placeholder='enter username'
                    name = 'username'
                    />
                </label>

                <label>Password
                    <input
                    type='text'
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder='enter password'
                    name = 'password'
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;