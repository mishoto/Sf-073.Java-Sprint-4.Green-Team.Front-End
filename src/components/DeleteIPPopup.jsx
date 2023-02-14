import React from "react";

function DeleteIPPopup(props) {
    const reload = () => window.location.reload();
    const handleClose = () => {
        reload();
    };
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => handleClose()}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default DeleteIPPopup