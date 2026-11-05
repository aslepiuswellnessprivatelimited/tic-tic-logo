import React from "react";
import TicTicLogo from "./components/TicTicLogo.jsx";

export default function App() {
  const [showIntro, setShowIntro] = React.useState(true);
  const [replayKey, setReplayKey] = React.useState(0);

  return (
    <main className="demo-page">
      <header className="demo-header">
        <TicTicLogo />
        <span className="header-caption">Digital Bus Seat Reservation</span>
      </header>

      <section className="demo-content">
        <div className="eyebrow">YOUR JOURNEY STARTS HERE</div>
        <h1>Travel smarter with <span>TicTic.</span></h1>
        <p>
          A lightweight SVG and CSS logo animation concept for your bus
          reservation website.
        </p>
        <button
          className="replay-button"
          onClick={() => {
            setShowIntro(true);
            setReplayKey((key) => key + 1);
          }}
        >
          Replay logo intro
        </button>
      </section>

      {showIntro && (
        <div className="intro-overlay" key={replayKey}>
          <div className="intro-glow" />
          <TicTicLogo intro onIntroComplete={() => setShowIntro(false)} />
          <span className="intro-caption">Your next journey, one tick away.</span>
        </div>
      )}
    </main>
  );
}