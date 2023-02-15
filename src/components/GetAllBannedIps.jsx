import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import StateContext from "../StateContext";
import Axios from "axios";
import InfoPopUp from "./InfoPopUp";
import DeleteIPPopup from "./DeleteIPPopup";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const GetAllBannedIps = () => {
    const [bannedIps, setBannedIps] = useState([]);
    const appState = useContext(StateContext);
    const [buttonPopup, setButtonPopup] = useState(false)


    useEffect(() => {
        axios.get(`${URL}api/antifraud/suspicious-ip`, {
            withCredentials: true,
            auth: {
                username: "support",
                password: "pass",
            },
        }).then(res => {
            console.log(res)
            setBannedIps(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [appState])

    const handleDelete = async (ipAddress) => {

        Axios.delete(`${URL}api/antifraud/suspicious-ip/${ipAddress}`, {
            withCredentials: true,
            auth: {
                username: "support",
                password: "pass",
            },
        })
            .then(() => {
                setBannedIps(bannedIps.filter((bannedIp) => bannedIp !== ipAddress));
                console.log("IP deleted")
            })
            .catch(error => console.error(error));
        setButtonPopup(true)
    };

    return (
        // <div>
        //     <h2>Banned IPs:</h2>
        //     <ul>
        //         {bannedIps.map((ip) => (
        //             <li key={ip.id}>{ip.ip}</li>
        //         ))}
        //     </ul>
        // </div>

        <div>
            <h3 className="banned-ips-title">Banned IPs:</h3>
            <ul className="banned-ips-list">
                {bannedIps.map((ip) => (
                    <li key={ip.id} className="banned-ip-item">{ip.ip}
                        <span className="banned-ip-value"></span>
                        <button type="button" onClick={() => handleDelete(ip.ip)}>
                            Unban
                        </button>
                        <DeleteIPPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <p>IP Was Unbanned!</p>
                        </DeleteIPPopup>
                    </li>
                ))}
            </ul>
            {bannedIps.length === 0 && <p className="no-banned-ips-message">No IPs are banned</p>}
        </div>
    );
};


export default GetAllBannedIps;