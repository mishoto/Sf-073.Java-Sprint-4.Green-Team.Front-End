import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Axios.post("http://localhost:28852/api/auth/user", {name, username, password})
            console.log("User was successfully created.")
        } catch (e) {
            console.log(e.response)
        }
    };

    return (
        <section>
            <h4>SignUp Page</h4>
            <Link to='/' className='btn'>
                Home
            </Link>

            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                        password
                    </label>
                    <input
                        type='password'
                        className='form-input'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
