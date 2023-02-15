import React, {useContext, useState} from 'react'
import StateContext from "../../StateContext";
import Axios from "axios";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const ChangeUserStatus = () => {
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;
    const [inputUsername, setInputUsername] = useState();
    const [inputOperation, setInputOperation] = useState();

    const changeStatus = async (e) => {
        e.preventDefault();
        try {
            await Axios.put(
                `${URL}api/auth/access`,
                {
                    username: inputUsername,
                    operation: inputOperation
                },
                {
                    withCredentials: true,
                    auth: {
                        username: username,
                        password: password,
                    },
                }
            );
            console.log("User status of '" + inputUsername + "' successfully changed to " + inputOperation)
            setInputUsername("");
            setInputOperation("");
        } catch (e) {
            console.log(e.response);
        }
    };

    return (
        <section className='section'>
            <div className="ban-ip-container">
                <h2 className="ban-ip-title">Change users status</h2>
                <form className="ban-ip-form">
                    <input type="text" placeholder='username' value={inputUsername}
                           onChange={(e) => setInputUsername(e.target.value)}/>
                    <input type="text" placeholder='operation' value={inputOperation}
                           onChange={(e) => setInputOperation(e.target.value)}/>
                    <button type="button" onClick={changeStatus}>
                        Change Status
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ChangeUserStatus