import React from 'react'
import AdminPanel from "../../pages/AdminPanel";
import AllUsers from "../AllUsers";
import DeleteUser from "./DeleteUser";

const AdminDeleteUser = () => {
    return (
        <section>
            <AdminPanel/>
            <DeleteUser/>
            <AllUsers/>
        </section>
    )
}

export default AdminDeleteUser