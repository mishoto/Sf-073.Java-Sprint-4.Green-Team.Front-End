import React, {useContext, useState, useEffect} from 'react'
import StateContext from "../StateContext";
import Axios from "axios";
import DispatchContext from "../DispatchContext";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const AllUsers = () => {
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;
    const role = appState.user.role;
    const [users, setUsers] = useState(StateContext)

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await Axios.get(`${URL}api/auth/list`, {
                    withCredentials: true,
                    auth: {
                        username: 'admin',
                        password: 'pass',
                    }
                });
                setUsers(response.data)
                // console.log(response.data)
            } catch (e) {
                console.log(e.response.data)
            }
        }

        fetchUsers().then(() => {
        })
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

                                    {/*{Object.entries(users).map(([key, values]) => {*/}
                                    {/*    */}
                                    {/*    return (*/}
                                    {/*        <tr >*/}
                                    {/*            <th scope="row" className="scope">.com</th>*/}
                                    {/*            <td>name</td>*/}
                                    {/*            <td>name</td>*/}
                                    {/*            <td>name</td>*/}
                                    {/*            <td>name</td>*/}
                                    {/*            /!*<td><a href="#" className="btn btn-primary">Sign Up</a></td>*!/*/}
                                    {/*        </tr>*/}
                                    {/*    )*/}
                                    {/*})}*/}
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

export default AllUsers
