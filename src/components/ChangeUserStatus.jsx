import React, {useContext, useState, useEffect} from 'react'
import StateContext from "../StateContext";
import Axios from "axios";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const ChangeUserStatus = () => {
    const appState = useContext(StateContext)
    const [users, setUsers] = useState([])
    const username = appState.user.username;
    const password = appState.user.password;

    const [status, setStatus] = useState('LOCK');


    useEffect(() => {
        async function fetchUsers(username, password) {
            try {
                const response = await Axios.get(`${URL}api/auth/list`, {
                    withCredentials: true,
                    auth: {username: username, password: 'pass'},
                })
                setUsers(response.data)
            } catch (e) {
                console.log(e.response.data)
            }
        }

        fetchUsers(username, password)

    }, [appState])

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
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map((user) => {
                                        return (
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.role}</td>
                                                <td>{user.unLocked === true ? 'UNLOCKED' : 'LOCKED'}</td>
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

export default ChangeUserStatus