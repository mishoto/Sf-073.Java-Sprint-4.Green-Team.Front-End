import React from 'react'
import {Link} from "react-router-dom";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "./AllUsers";
import ChangeUserStatus from "./ChangeUserStatus";

const ChangeStatus = () => {
    return (
        <section>
            <AdminPanel/>
            <ChangeUserStatus/>
        </section>
    )
}

export default ChangeStatus