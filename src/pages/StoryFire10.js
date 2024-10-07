import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryFire10.css";

export default function StoryFire10() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/story6");
    };

    const handleBack = () => {
        navigate("/caju/storyfire8");
    };

    return (
        <div className="story-fire-container10">
            <ContinueButton text="Back to Menu" fontSize="40px" width="300px" left="87%" onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
