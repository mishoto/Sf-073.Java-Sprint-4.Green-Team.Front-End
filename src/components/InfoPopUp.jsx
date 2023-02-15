import React from "react";

function InfoPopUp(props) {
    const reload = () => window.location.href = "https://sf073-green-fe.netlify.app/support/suspiciousIp"
    const handleClose = () => {
        reload();
    };
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={(() => handleClose()) && (() => props.setTrigger(true))}>close
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default InfoPopUp