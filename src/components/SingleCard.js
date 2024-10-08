import React from "react";
import "./SingleCard.css";
export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => handleChoice(card);
  return (
    <>
      <div className="card">
        <div className={flipped ? "frontCard": ""}>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            src="/img/cover.jpg"
            onClick={handleClick}
            alt="card back"
          />
        </div>
      </div>
    </>
  );
}
