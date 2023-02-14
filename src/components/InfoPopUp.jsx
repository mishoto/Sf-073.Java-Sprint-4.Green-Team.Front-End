import React from "react";

function InfoPopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(true)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default InfoPopUp