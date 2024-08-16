import { useState } from "react";
import "./App.css";
const cards = [{ src: "/img/helmet-1.png" }, { src: "/img/ring-1.png" }];

function App() {
  const [cards, setCards] = useState([]);

  const shufflecards = () => {
    const shufflecards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shufflecards);
  };
  console.log(cards);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shufflecards}>New Game</button>
    </div>
  );
}

export default App;
