import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./ScratchWind.css";

export default function ScratchPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyfire8");
    };

    const handleBack = () => {
        navigate("/caju/storyfire7");
    };

    return (
        <div className="scratch-wind-container">
            <div className="button-continue-scratch2"></div>
            <div className="button-return-scratch2"></div>
            <iframe src="https://scratch.mit.edu/projects/1077276956/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
