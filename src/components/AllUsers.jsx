import React, {useContext, useState, useEffect} from 'react'
import StateContext from "../StateContext";
import {useImmer} from "use-immer";
import Axios from "axios";
import {logPlugin} from "@babel/preset-env/lib/debug";

Axios.defaults.baseURL = "http://localhost:8080"

const AllUsers = () => {
    const appState = useContext(StateContext)
    const [users, setUsers] = useState([] )

    useEffect(() => {
        const ourRequest = Axios.CancelToken.source()

        async function fetchPosts() {
            try {
                const response = await Axios.get("/api/auth/users")
                setPosts(response.data)
                setIsLoading(false)
            } catch (e) {
                console.log("There was a problem.")
            }
        }
        fetchPosts()
        return () => {
            ourRequest.cancel()
        }
    }, [username])


    let response = null;

    async function fetchData() {
        try {
             response = await Axios.get("/api/auth/users")
            console.log(response)
        } catch (e) {
            console.log("There was a problem.")
        }
    }


    console.log(response)

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
                                    <tr>
                                        <th scope="row" className="scope">.com</th>
                                        <td>1 Year</td>
                                        <td>$70.00</td>
                                        <td>$5.00</td>
                                        <td><a href="#" className="btn btn-primary">Sign Up</a></td>
                                    </tr>
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