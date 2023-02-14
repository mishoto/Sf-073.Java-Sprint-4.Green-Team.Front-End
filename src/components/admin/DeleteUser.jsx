import React, {useContext, useState} from 'react'
import StateContext from "../../StateContext";
import Axios from "axios";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const DeleteUser = () => {
    const appState = useContext(StateContext)
    const loggedInUsername = appState.user.username;
    const loggedInPassword = appState.user.password;
    const [username, setUsername] = useState();

    const deleteUser = async (e) => {
        e.preventDefault();
        try {
            console.log(username)
            await Axios.delete(
                `${URL}api/auth/user/${username}`, {
                    withCredentials: true,
                    auth: {
                        username: loggedInUsername,
                        password: loggedInPassword,
                    },
                }
            );
            console.log("User successfully deleted")
            setUsername("");
        } catch (e) {
            console.log(e.response);
        }
    };

    return (
        <section className='section'>
            <div className="ban-ip-container">
                <h2 className="ban-ip-title">Delete User</h2>
                <form className="ban-ip-form">
                    <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <button type="button" onClick={deleteUser}>
                       Delete user
                    </button>
                </form>
            </div>
        </section>
    );

}

export default DeleteUser