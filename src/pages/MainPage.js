import React from "react";
import "../App.css";

function MainPage() {
  return (
    <main className="hero-section">
      <h1 className="game-title">TERRACRAFT</h1>
      <p className="tagline">제작하고, 전투하고, 생존하라.</p>
      <a href="/game/Terracraft.exe" download className="hero-button">
        Download Now
      </a>
      <div className="social-links">
        <a href="https://github.com/RyanYang99/2025S_Project">GitHub</a>
        <a href="https://discord.gg/mpwq4xjf">Discord</a>
      </div>
    </main>
  );
}

export default MainPage;
