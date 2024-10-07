import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import DialogueBox from "../components/DialogueBox";
import BackButton from "../components/BackButton";
import "./StoryWind10.css";

export default function StoryWind10() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storywind11");
    };

    const handleBack = () => {
        navigate("/caju/storyhwind9");
    };

    return (
        <div className="story-wind-container10">
            <DialogueBox
                text={
                    <p>
                        Thank you, <br /> {nickname}!
                    </p>
                }
                top="53%"
                left="5%"
                fontSize="28px"
            />
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
