import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <button className="back-button" onClick={handleClick}>
            <i className="fas fa-arrow-left"></i>
            Back
        </button>
    );
};

export default BackButton;