import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import DialogueBox from "../components/DialogueBox";
import BackButton from "../components/BackButton";
import "./StoryWind11.css";

export default function StoryWind11() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/story6");
    };

    const handleBack = () => {
        navigate("/caju/storywind10");
    };

    return (
        <div className="story-wind-container11">
            <ContinueButton text="Back to Menu" fontSize="40px" width="300px" left="87%" onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
