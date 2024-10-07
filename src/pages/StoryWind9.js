import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import DialogueBox from "../components/DialogueBox";
import BackButton from "../components/BackButton";
import "./StoryWind9.css";

export default function StoryWind9() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storywind10");
    };

    const handleBack = () => {
        navigate("/caju/storywind8");
    };

    return (
        <div className="story-wind-container9">
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
