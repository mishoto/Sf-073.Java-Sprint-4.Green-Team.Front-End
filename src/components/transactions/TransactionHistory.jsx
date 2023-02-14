import React, {useContext, useState} from 'react'
import StateContext from "../../StateContext";
import Axios from "axios";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const TransactionHistory = () => {
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;

    const [cardNumber, setCardNumber] = useState();
    const [transactionHistory, setTransactionHistory] = useState([]);

    const getTransactionHistory = async (e) => {
        e.preventDefault();
        try {
            console.log(username)
            await Axios.get(
                `${URL}api/antifraud/history/${cardNumber}`, {
                    withCredentials: true,
                    auth: {
                        username: username,
                        password: password,
                    },
                }
            ).then((response) => {
                setTransactionHistory(response.data)
            })
            console.log("history")
            setCardNumber("");
        } catch (e) {
            console.log(e.response);
        }
    };

    return (
        <section className='section'>
            <div className="ban-ip-container">
                <h2 className="ban-ip-title">Transaction History</h2>
                <form className="ban-ip-form">
                    <input type="text" placeholder='cardNumber' value={cardNumber}
                           onChange={(e) => setCardNumber(e.target.value)}/>
                    <button type="button" onClick={getTransactionHistory}>
                        GET
                    </button>
                </form>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table">
                                <thead className="thead-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Amount</th>
                                    <th>Ip</th>
                                    <th>CreditCard</th>
                                    <th>Date</th>
                                    <th>Region</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {transactionHistory.map((transactionHistory) => {
                                    return (
                                        <tr>
                                            <td>{transactionHistory.transactionId}</td>
                                            <td>{transactionHistory.amount}</td>
                                            <td>{transactionHistory.ip}</td>
                                            <td>{transactionHistory.number}</td>
                                            <td>{transactionHistory.region}</td>
                                            <td>{transactionHistory.date}</td>
                                            <td>{transactionHistory.result}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TransactionHistory
