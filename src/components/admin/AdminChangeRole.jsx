import React from 'react'
import AdminPanel from "../../pages/AdminPanel";
import AllUsers from "../AllUsers";
import ChangeUserRole from "./ChangeUserRole";

const AdminChangeRole = () => {
    return (
        <section>
            <AdminPanel/>
            <ChangeUserRole/>
            <AllUsers/>
        </section>
    )
}

export default AdminChangeRole