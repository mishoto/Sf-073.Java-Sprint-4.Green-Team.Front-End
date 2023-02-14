import React from 'react'
import {Link} from "react-router-dom";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "./AllUsers";
import ChangeUserStatus from "./admin/ChangeUserStatus";
import SupportPanel from "../pages/SupportPanel";
import IpAddress from "./IpAddress";

const SupportPanelNavBar = () => {
    return (
        <section>
            <SupportPanel/>
            <IpAddress/>
        </section>
    )
}

export default SupportPanelNavBar