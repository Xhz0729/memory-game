import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardsImg = [
  { src: "/img/dou.jpeg", matched: false },
  { src: "/img/Romy.jpeg", matched: false },
  { src: "/img/ding.jpg", matched: false },
  { src: "/img/king.jpg", matched: false },
  { src: "/img/fu.jpg", matched: false },
  { src: "/img/pag.jpg", matched: false },
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
    setChoiceA(null);
    setChoiceB(null);
    setTurns(0);
  };

  // handle user's choice
  const handleChoice = (card) => {
    choiceA ? setChoiceB(card) : setChoiceA(card);
  };

  // make matches
  useEffect(() => {
    // whether two cards get values
    if (choiceA && choiceB) {
      if (choiceA.src === choiceB.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceA.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoice();
      } else {
        setTimeout(() => resetChoice(), 1000);
      }
    }
  }, [choiceA, choiceB]);
  console.log(cards);

  // reset choices && increase turn
  const resetChoice = () => {
    setChoiceA(null);
    setChoiceB(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // start the game automatically
  useEffect(() => {
    shufflecards();
  }, []);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufflecards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceA || card === choiceB || card.matched}
          />
        ))}
      </div>
      <p>Truns: {turns}</p>
    </div>
  );
}

export default App;
