import React, {useContext, useState} from "react";
import Axios from "axios";
import StateContext from "../StateContext";
import BackButton from "./BackButtonForIp";


const URL = "https://sf073-green-be-prod.up.railway.app/"

const SingleTransaction = () => {
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;


    const [transaction, setTransaction] = useState([]);
    const [amountValue, setAmountValue] = useState();
    const [ipValue, setIpValue] = useState();
    const [numberValue, setNumberValue] = useState();
    const [regionValue, setRegionValue] = useState();
    const [dateValue, setDateValue] = useState();


    const makeTransaction = async (e) => {
        e.preventDefault();
        try {
            await Axios.post(
                `${URL}api/antifraud/transaction`,
                {
                    amount: amountValue,
                    ip: ipValue,
                    number: numberValue,
                    region: regionValue,
                    date: dateValue
                },
                {
                    withCredentials: true,
                    auth: {
                        username: username,
                        password: "pass",
                    },
                }
            ).then(function (response) {
                alert(`${JSON.stringify(response.data)}`);
                console.log(response);
            });
            console.log("Transaction was successfully made.");

            setTransaction([...transaction, amountValue, ipValue, numberValue, regionValue, dateValue])
            setTransaction([]);
            setAmountValue("")
            setIpValue("")
            setNumberValue("")
            setRegionValue("")
            setDateValue("")
        } catch (e) {
            console.log(e.response);
        }
    };


    return (
        <div className="ban-ip-container">
            <h2 className="ban-ip-title">Transaction</h2>
            <form className="ban-ip-form">
                <label className="label-color">Amount
                    <input type="text" value={amountValue} onChange={(e) => setAmountValue(e.target.value)}/>
                </label>
                <label className="label-color">IP
                    <input type="text" value={ipValue} onChange={(e) => setIpValue(e.target.value)}/>
                </label>
                <label className="label-color">Card Number
                    <input type="txt" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}/>
                </label>
                <label className="label-color">Region
                    <input type="text" value={regionValue} onChange={(e) => setRegionValue(e.target.value)}/>
                </label>
                <label className="label-color">Date and time
                    <input type="text" value={dateValue} onChange={(e) => setDateValue(e.target.value)}/>
                </label>
                <button type="button" onClick={makeTransaction}>
                    Transaction
                </button>
            </form>
            <BackButton/>
        </div>
    );
}

export default SingleTransaction

