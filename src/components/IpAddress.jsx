import React, {useContext, useEffect, useState} from "react";
import Axios from "axios";
import BackButton from "./BackButtonForIp";
import GetAllBannedIps from "./GetAllBannedIps";
import StateContext from "../StateContext";
import InfoPopUp from "./InfoPopUp";

const URL = "https://sf073-green-be-prod.up.railway.app/"

const IpAddress = () => {
    const [bannedIPs, setBannedIPs] = useState([]);
    const [inputValue, setInputValue] = useState();
    const [buttonPopup, setButtonPopup] = useState(false)
    const appState = useContext(StateContext)
    const username = appState.user.username;
    const password = appState.user.password;

    const addBannedIP = async (e) => {
        e.preventDefault();
        try {
            await Axios.post(
                `${URL}api/antifraud/suspicious-ip`,
                {ip: inputValue},
                {
                    withCredentials: true,
                    auth: {
                        username: "support",
                        password: "pass",
                    },
                }
            );
            console.log("IP was successfully banned.");
            setBannedIPs([...bannedIPs, inputValue]);
            setButtonPopup(true)
            setInputValue("");
        } catch (e) {
            console.log(e.response);
        }
    }
    // const handleDelete = async (ipAddress) => {
    //
    //     Axios.delete(`${URL}api/antifraud/suspicious-ip/${ipAddress}`, {
    //         withCredentials: true,
    //         auth: {
    //             username: "support",
    //             password: "pass",
    //         },
    //     })
    //         .then(() => {
    //             setBannedIPs(bannedIPs.filter((bannedIp) => bannedIp !== ipAddress));
    //             console.log("IP deleted")
    //         })
    //         .catch(error => console.error(error));
    // };


    // const deleteBannedIP = (ip) => {
    //     setBannedIPs(bannedIPs.filter((bannedIP) => bannedIP !== ip));
    // };


    return (
        <div className="ban-ip-container">
            <h2 className="ban-ip-title">Ban Suspicious IP Address</h2>
            <form className="ban-ip-form">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="button" onClick={addBannedIP}>
                    Ban IP
                </button>
                <InfoPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <p>IP Was Banned Successfully!</p>
                </InfoPopUp>
            </form>
            {/*<h3 className="banned-ips-title">Banned IPs:</h3>*/}
            {/*<ul className="banned-ips-list">*/}
            {/*    {bannedIPs.map((ip) => (*/}
            {/*        <li key={ip.id} className="banned-ip-item">*/}
            {/*            <span className="banned-ip-value">{ip}</span>*/}
            {/*            <button type="button" onClick={() => handleDelete(ip)}>*/}
            {/*                Unban*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            <GetAllBannedIps/>
            {/*{bannedIPs.length === 0 && <p className="no-banned-ips-message">No IPs are banned</p>}*/}
            <BackButton/>

        </div>
    );
};

export default IpAddress;
