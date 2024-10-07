import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoPage.css";

export default function VideoPage() {
    const navigate = useNavigate();

    // Função para voltar para a página inicial
    const goBack = () => {
        navigate("/"); // Navega de volta para a página principal
    };

    return (
        <div className="video-container">
            <div className="video-overlay"></div> {/* Overlay para bloquear interação */}
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZJWuf9mfg64?autoplay=1&mute=1&si=BA64SynFCvT4LeGq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <button className="return-button" onClick={goBack}>
                Return
            </button>
        </div>
    );
}
