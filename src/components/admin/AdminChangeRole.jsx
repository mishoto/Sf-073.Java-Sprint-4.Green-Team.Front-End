import React from 'react'
import AdminPanel from "../../pages/AdminPanel";
import AllUsers from "../AllUsers";
import ChangeUserRole from "./ChangeUserRole";

const AdminChangeRole = () => {
    return (
        <section>
            <AdminPanel/>
            <ChangeUserRole/>
        </section>
    )
}

export default AdminChangeRole