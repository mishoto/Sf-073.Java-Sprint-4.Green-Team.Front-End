import React, {useContext, useState, useEffect} from 'react'
import StateContext from "../StateContext";
import Axios from "axios";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const AllCards = () => {
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;
    const [cards, setCards] = useState([])
    const[cardNumber, setCardNumber] = useState("");

    const fetchCards = async (username, password) => {
        try {
            const response = await Axios.get(`${URL}api/antifraud/stolencard`, {
                withCredentials: true,
                auth: {username: username, password: password},
            })
            setCards(response.data)
        } catch (e) {
            console.log(e.response.data)
        }
    }

    const deleteCard = async (number)=>{
        try {
            await Axios.delete(`${URL}api/antifraud/stolencard/${number}`, {
                withCredentials: true,
                auth: {username: username, password: password},
            })
            fetchCards(username, password)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCards(username, password)
    }, [])

    useEffect(() => {
        deleteCard(cardNumber)

    }, [cardNumber])


    return (
        <section className="section">
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-wrap">
                                <table className="table">
                                    <thead className="thead-primary">
                                    <tr>
                                        <th>ID</th>
                                        <th>NUMBER</th>
                                        <th>operation</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cards.map((card) => {
                                        return (
                                            <tr>
                                                <td>{card.id}</td>
                                                <td>{card.number}</td>
                                                <td>
                                                    <button className="btn btn-block" type="button"
                                                            onClick={() => setCardNumber(card.number)}>Delete</button>
                                                </td>
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
        </section>
    )
}

export default AllCards
