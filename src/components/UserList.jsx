import React from 'react'
import {Link} from "react-router-dom";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "./AllUsers";

const UserList = () => {
    return (
        <section>
            <AdminPanel/>
            <AllUsers/>
        </section>
    )
}

export default UserList