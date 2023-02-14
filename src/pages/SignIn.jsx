import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import DispatchContext from "../DispatchContext";
import Axios from "axios"

Axios.defaults.baseURL = "https://sf073-green-be-prod.up.railway.app/"

const SignIn = () => {
    const appDispatch = useContext(DispatchContext)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await Axios.post("api/auth/login", {username, password})
            if (response.data) {
                appDispatch({type: "login", data: response.data})
                console.log("User logged in.")
                if (response.data.role === 'ADMINISTRATOR') {
                    navigate("/admin")
                } else if (response.data.role === 'SUPPORT') {
                    navigate("/support")
                }else if (response.data.role === 'MERCHANT') {
                    navigate("/merchant")
                }
            } else {
                console.log("Incorrect username / password.")
            }
        } catch (e) {
            console.log(e.response.data)
        }
    }

    return (
        <section className='section'>
            <form className='form' onSubmit={handleSubmit}>
                <h5>Sign in</h5>
                <div className='form-row'>
                    <label htmlFor='username' className='form-label'>
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='username'
                        value={username}
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                    </label>
                    <input
                        type='password'
                        className='form-input'
                        id='password'
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-block'>
                    Sign in
                </button>
            </form>
        </section>
    );
};
export default SignIn;
