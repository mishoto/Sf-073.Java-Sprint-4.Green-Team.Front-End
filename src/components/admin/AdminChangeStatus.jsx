import React from 'react'
import AdminPanel from "../../pages/AdminPanel";
import AllUsers from "../AllUsers";
import ChangeUserStatus from "./ChangeUserStatus";

const AdminChangeStatus = () => {
    return (
        <section>
            <AdminPanel/>
            <ChangeUserStatus/>
        </section>
    )
}

export default AdminChangeStatus