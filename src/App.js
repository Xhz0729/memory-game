import { useState } from "react";
import "./App.css";
import { Simulate } from "react-dom/test-utils";
import SingleCard from "./components/SingleCard";
const cardsImg = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceA, setChoiceA] = useState(null);
  const [choiceB, setChoiceB] = useState(null);
  // shuffle cards
  const shufflecards = () => {
    // duplicate the cards
    const shufflecards = [...cardsImg, ...cardsImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shufflecards);
    setTurns(0);
  };

  // handle user's choice
  const handleChoice = (card) => {
    choiceA ? setChoiceB(card) : setChoiceA(card);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufflecards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
