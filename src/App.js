import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage1 from "./pages/StoryPage1"; // Nova página da história
import StoryPage2 from "./pages/StoryPage2"; // Nova página da história
import StoryPage3 from "./pages/StoryPage3"; // Nova página da história
import StoryPage4 from "./pages/StoryPage4"; // Nova página da história
import StoryPage5 from "./pages/StoryPage5"; // Nova página da história
import StoryPage6 from "./pages/StoryPage6"; // Nova página da história
import MenuFire1 from "./pages/MenuFire1"; // Nova página da história
import MenuAqua1 from "./pages/MenuAqua1"; // Nova página da história
import MenuGround1 from "./pages/MenuGround1"; // Nova página da história
import MenuWind1 from "./pages/MenuWind1"; // Nova página da história
import StoryAqua1 from "./pages/StoryAqua1"; // Nova página da história
import StoryAqua2 from "./pages/StoryAqua2"; // Nova página da história
import StoryAqua3 from "./pages/StoryAqua3"; // Nova página da história
import StoryAqua4 from "./pages/StoryAqua4"; // Nova página da história
import StoryAqua5 from "./pages/StoryAqua5"; // Nova página da história
import StoryAqua6 from "./pages/StoryAqua6"; // Nova página da história
import StoryAqua7 from "./pages/StoryAqua7"; // Nova página da história
import StoryAqua8 from "./pages/StoryAqua8"; // Nova página da história
import StoryAqua9 from "./pages/StoryAqua9"; // Nova página da história
import StoryAqua10 from "./pages/StoryAqua10"; // Nova página da história
import StoryAqua11 from "./pages/StoryAqua11"; // Nova página da história
import StoryAqua12 from "./pages/StoryAqua12"; // Nova página da história

import StoryWind1 from "./pages/StoryWind1"; // Nova página da história
import StoryWind2 from "./pages/StoryWind2"; // Nova página da história
import StoryWind3 from "./pages/StoryWind3"; // Nova página da história
import StoryWind4 from "./pages/StoryWind4"; // Nova página da história
import StoryWind5 from "./pages/StoryWind5"; // Nova página da história
import StoryWind6 from "./pages/StoryWind6"; // Nova página da história
import StoryWind7 from "./pages/StoryWind7"; // Nova página da história
import StoryWind8 from "./pages/StoryWind8"; // Nova página da história
import StoryWind9 from "./pages/StoryWind9"; // Nova página da história
import StoryWind10 from "./pages/StoryWind10"; // Nova página da história
import StoryWind11 from "./pages/StoryWind11"; // Nova página da história

import StoryFire1 from "./pages/StoryFire1"; // Nova página da história
import StoryFire2 from "./pages/StoryFire2"; // Nova página da história
import StoryFire3 from "./pages/StoryFire3"; // Nova página da história
import StoryFire4 from "./pages/StoryFire4"; // Nova página da história
import StoryFire5 from "./pages/StoryFire5"; // Nova página da história
import StoryFire6 from "./pages/StoryFire6"; // Nova página da história
import StoryFire7 from "./pages/StoryFire7"; // Nova página da história
import StoryFire8 from "./pages/StoryFire8"; // Nova página da história
import StoryFire9 from "./pages/StoryFire9"; // Nova página da história
import StoryFire10 from "./pages/StoryFire10"; // Nova página da história

import ScratchAqua from "./pages/ScratchAqua"; // Se necessário
import ScratchWind from "./pages/ScratchWind"; // Se necessário
import ScratchFire from "./pages/ScratchFire"; // Se necessário
import "./App.css";

function App() {
    const [isJourneyCompleted, setIsJourneyCompleted] = useState(false);

    // Função para iniciar a jornada e alterar a página
    const handleStartJourney = () => {
        setIsJourneyCompleted(true); // Define que a jornada foi completada
        window.location.href = "/#/caju/story1"; // Navega para a primeira página da história
    };

    return (
        <Router>
            <Routes>
                {/* Rota para a HomePage */}
                <Route path="/" element={<HomePage onStartJourney={handleStartJourney} />} />

                {/* Rota para a primeira página da história (depois da jornada) */}
                <Route path="/caju/story1" element={<StoryPage1 />} />
                <Route path="/caju/story2" element={<StoryPage2 />} />
                <Route path="/caju/story3" element={<StoryPage3 />} />
                <Route path="/caju/story4" element={<StoryPage4 />} />
                <Route path="/caju/story5" element={<StoryPage5 />} />
                <Route path="/caju/story6" element={<StoryPage6 />} />
                <Route path="/caju/menufire1" element={<MenuFire1 />} />
                <Route path="/caju/menuaqua1" element={<MenuAqua1 />} />
                <Route path="/caju/menuground1" element={<MenuGround1 />} />
                <Route path="/caju/menuwind1" element={<MenuWind1 />} />
                <Route path="/caju/storyaqua1" element={<StoryAqua1 />} />
                <Route path="/caju/storyaqua2" element={<StoryAqua2 />} />
                <Route path="/caju/storyaqua3" element={<StoryAqua3 />} />
                <Route path="/caju/storyaqua4" element={<StoryAqua4 />} />
                <Route path="/caju/storyaqua5" element={<StoryAqua5 />} />
                <Route path="/caju/storyaqua6" element={<StoryAqua6 />} />
                <Route path="/caju/storyaqua7" element={<StoryAqua7 />} />
                <Route path="/caju/storyaqua8" element={<StoryAqua8 />} />
                <Route path="/caju/storyaqua9" element={<StoryAqua9 />} />
                <Route path="/caju/storyaqua10" element={<StoryAqua10 />} />
                <Route path="/caju/storyaqua11" element={<StoryAqua11 />} />
                <Route path="/caju/storyaqua12" element={<StoryAqua12 />} />

                <Route path="/caju/storywind1" element={<StoryWind1 />} />
                <Route path="/caju/storywind2" element={<StoryWind2 />} />
                <Route path="/caju/storywind3" element={<StoryWind3 />} />
                <Route path="/caju/storywind4" element={<StoryWind4 />} />
                <Route path="/caju/storywind5" element={<StoryWind5 />} />
                <Route path="/caju/storywind6" element={<StoryWind6 />} />
                <Route path="/caju/storywind7" element={<StoryWind7 />} />
                <Route path="/caju/storywind8" element={<StoryWind8 />} />
                <Route path="/caju/storywind9" element={<StoryWind9 />} />
                <Route path="/caju/storywind10" element={<StoryWind10 />} />
                <Route path="/caju/storywind11" element={<StoryWind11 />} />

                <Route path="/caju/storyfire1" element={<StoryFire1 />} />
                <Route path="/caju/storyfire2" element={<StoryFire2 />} />
                <Route path="/caju/storyfire3" element={<StoryFire3 />} />
                <Route path="/caju/storyfire4" element={<StoryFire4 />} />
                <Route path="/caju/storyfire5" element={<StoryFire5 />} />
                <Route path="/caju/storyfire6" element={<StoryFire6 />} />
                <Route path="/caju/storyfire7" element={<StoryFire7 />} />
                <Route path="/caju/storyfire8" element={<StoryFire8 />} />
                <Route path="/caju/storyfire9" element={<StoryFire9 />} />
                <Route path="/caju/storyfire10" element={<StoryFire10 />} />

                {/* Exemplo: Se ainda precisar da ScratchPage */}
                <Route path="/caju/scratchaqua" element={<ScratchAqua />} />
                <Route path="/caju/scratchwind" element={<ScratchWind />} />
                <Route path="/caju/scratchfire" element={<ScratchFire />} />
            </Routes>
        </Router>
    );
}

export default App;
