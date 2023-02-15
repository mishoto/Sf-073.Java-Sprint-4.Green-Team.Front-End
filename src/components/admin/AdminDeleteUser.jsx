import React from 'react'
import AdminPanel from "../../pages/AdminPanel";
import AllUsers from "../AllUsers";
import DeleteUser from "./DeleteUser";

const AdminDeleteUser = () => {
    return (
        <section>
            <AdminPanel/>
            <DeleteUser/>
        </section>
    )
}

export default AdminDeleteUser