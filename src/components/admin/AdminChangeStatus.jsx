import React from 'react'
import AdminPanel from "../../pages/AdminPanel";
import AllUsers from "../AllUsers";
import ChangeUserStatus from "./ChangeUserStatus";

const AdminChangeStatus = () => {
    return (
        <section>
            <AdminPanel/>
            <ChangeUserStatus/>
            <AllUsers/>
        </section>
    )
}

export default AdminChangeStatus