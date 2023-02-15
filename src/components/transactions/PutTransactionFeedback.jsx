import React, {useContext, useState} from 'react'
import StateContext from "../../StateContext";
import Axios from "axios";
import InfoPopUp from "../InfoPopUp";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const PutTransactionFeedback = () => {
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;


    const [inputTransactionId, setInputTransactionID] = useState();
    const [inputFeedBack, setInputFeedBack] = useState();

    const putFeedback = async (e) => {
        e.preventDefault();
        try {
            await Axios.put(
                `${URL}api/antifraud/transaction`,
                {
                    transactionId: inputTransactionId,
                    feedback: inputFeedBack
                },
                {
                    withCredentials: true,
                    auth: {
                        username: username,
                        password: password,
                    },
                }
            );
            console.log("Successfull!")
            setInputTransactionID("")
            setInputFeedBack("")
        } catch (e) {
            console.log(e.response);
        }
    };

    return (
        <section className='section'>
            <div className="ban-ip-container">
                <h2 className="ban-ip-title">Give transaction feedback</h2>
                <form className="ban-ip-form">
                    <input type="text" placeholder='ID' value={inputTransactionId}
                           onChange={(e) => setInputTransactionID(e.target.value)}/>
                    <input type="text" placeholder='feedback' value={inputFeedBack}
                           onChange={(e) => setInputFeedBack(e.target.value)}/>
                    <button type="button" onClick={putFeedback}>
                        Feedback
                    </button>
                </form>
            </div>
        </section>
    );

}

export default PutTransactionFeedback