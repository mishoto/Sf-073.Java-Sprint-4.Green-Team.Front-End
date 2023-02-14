import React, {useContext} from 'react'
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "./AllUsers";
import StateContext from "../StateContext";
import SupportPanel from "../pages/SupportPanel";

const UserList = () => {
    const appState = useContext(StateContext)
    const role = appState.user.role;

    if (role === 'SUPPORT') {
        return (
            <section>
                <SupportPanel/>
                <AllUsers/>
            </section>
        )
    } else {
        return (
            <section>
                <AdminPanel/>
                <AllUsers/>
            </section>
        )
    }
}

export default UserList