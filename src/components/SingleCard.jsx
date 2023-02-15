import React, {useContext, useEffect, useState} from "react";
import Axios from "axios";
import StateContext from "../StateContext";
import BackButton from "./BackButtonForIp";


const URL = "https://sf073-green-be-prod.up.railway.app/"

const SingleCard = () => {
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;

    const [number, setNumber] = useState("");
    const [id, setId] = useState(0);

    const createCard = async () => {
        try {
            const response = await Axios.post(
                `${URL}api/antifraud/stolencard`,
                {
                    number: number,
                },
                {
                    withCredentials: true,
                    auth: {
                        username: username,
                        password: password,
                    },
                }
            );
            setId(response.data.id)
            setNumber(response.data.number)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        createCard()
            .then()

    }, [])

    return (
        <>

        <div className="ban-ip-container">
            <h2 className="ban-ip-title">Card</h2>
            <form className="ban-ip-form">
                <label className="label-color">Card Number
                    <input type="txt" onChange={(e) => setNumber(e.target.value)}/>
                </label>
                <button type="button" onClick={createCard}>
                    Create Card
                </button>
            </form>
            <BackButton/>
        </div>
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
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                            <td>{id}</td>
                                            <td>{number}</td>
                                            <td></td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
        </>
    );
}

export default SingleCard

