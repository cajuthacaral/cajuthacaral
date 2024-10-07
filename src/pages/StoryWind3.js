import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryWind3.css";

export default function StoryWind3() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    // Estado para controlar qual diálogo está sendo exibido
    const [currentDialogue, setCurrentDialogue] = useState(1);

    // Função para avançar o diálogo
    const handleContinue = () => {
        if (currentDialogue < 2) {
            setCurrentDialogue(currentDialogue + 1);
        } else {
            navigate("/caju/storywind4"); // Navega para a próxima página após o último diálogo
        }
    };

    // Função para voltar o diálogo
    const handleBack = () => {
        if (currentDialogue > 1) {
            setCurrentDialogue(currentDialogue - 1);
        } else {
            navigate("/caju/storywind2"); // Navega para a página anterior se estiver no primeiro diálogo
        }
    };

    // Diálogos que serão exibidos
    const dialogues = [
        {
            text: (
                <p>
                    But now, the skies are filled with toxic storms, and the air is <br /> barely breathable. It's not just our planet—this disorder is <br /> spreading across the system.
                </p>
            ),
            fontSize: "36px",
            left: "10%",
            top: "4%",
        },
        {
            text: (
                <p>
                    The screen shifts to show turbulent winds, storms, <br /> and dark clouds rolling across the landscape.
                </p>
            ),
            fontSize: "36px",
            left: "16%",
            top: "4%",
        },
    ];

    return (
        <div className="video-fundo-storywind3">
            {/* Vídeo de fundo continua rodando sem interrupção */}
            <video autoPlay loop muted playsInline className="video-background">
                <source src={`${process.env.PUBLIC_URL}/images/StoryWind3.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Exibe o diálogo correspondente ao estado atual */}
            <DialogueBox text={dialogues[currentDialogue - 1].text} fontSize={dialogues[currentDialogue - 1].fontSize} left={dialogues[currentDialogue - 1].left} top={dialogues[currentDialogue - 1].top} />

            {/* Botão "Continue" para avançar o diálogo */}
            <ContinueButton onClick={handleContinue} />

            {/* Botão "Back" para voltar o diálogo */}
            <BackButton onClick={handleBack} />
        </div>
    );
}
