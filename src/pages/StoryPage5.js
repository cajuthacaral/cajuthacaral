import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import PlanetAnimation from "../components/PlanetAnimation";
import BackButton from "../components/BackButton";
import "./StoryPage5.css";

export default function StoryPage2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/story6");
    };

    const handleBack = () => {
        navigate("/caju/story4");
    };

    return (
        <div className="story-container5">
            <div className="button-return-ground3"></div>
            <div className="button-continue-ground3"></div>
            <div className="video-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xAc13Ko-bt4?autoplay=1&loop=1&playlist=xAc13Ko-bt4&controls=0&modestbranding=1&showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="overlay"></div>
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
