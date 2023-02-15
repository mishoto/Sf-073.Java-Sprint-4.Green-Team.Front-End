import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = "https://sf073-green-be-prod.up.railway.app/"

const SignUp = () => {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Axios.post("/api/auth/user", {name, username, password})
            console.log("User was successfully created.")
            navigate("/")
        } catch (e) {
            console.log(e.response)
        }
    };

    return (
        <section className="section">
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='username' className='form-label'>
                        username
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='username'
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                        password
                    </label>
                    <input
                        type='password'
                        className='form-input'
                        placeholder="Password"
                        id='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-block'>
                    Sing Up
                </button>
            </form>
        </section>
    );
}

export default SignUp
