// GuessNumberGame.js
import React, { useState } from "react";

const GuessNumberGame = () => {
  const [secretNumber, setSecretNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [hints, setHints] = useState([]);
  const [result, setResult] = useState("");
  const [gameActive, setGameActive] = useState(false);

  const startGame = () => {
    const random = Math.floor(Math.random() * 1000) + 1;
    setSecretNumber(random);
    setGuess("");
    setAttempts(0);
    setHints([]);
    setResult("");
    setGameActive(true);
  };

  const checkGuess = () => {
    const numGuess = Number(guess);
    if (!numGuess || numGuess < 1 || numGuess > 1000) {
      alert("Введіть число від 1 до 1000!");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (numGuess === secretNumber) {
      setResult("Good Job!");
      setGameActive(false);
    } else {
      const hint = `N ${numGuess < secretNumber ? ">" : "<"} ${numGuess}`;
      setHints([...hints, hint]);
      if (newAttempts >= 10) {
        setResult("Game Over!");
        setGameActive(false);
      }
    }
    setGuess("");
  };

  return (
    <div style={{ width: "300px", border: "1px solid black", padding: 10 }}>
      <button onClick={startGame} disabled={gameActive}>New Game</button>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={!gameActive}
      />
      <button onClick={checkGuess} disabled={!gameActive}>Check</button>

      <div style={{ marginTop: 10 }}>
        <strong>Information:</strong>
        <div style={{ backgroundColor: "gold", padding: 5 }}>
          {hints.map((hint, idx) => (
            <div key={idx}>{hint}</div>
          ))}
        </div>
        <p>
          <strong>Attempts:</strong> {attempts}
        </p>
        <p>
          <strong>Result:</strong> {result}
        </p>
      </div>
    </div>
  );
};

export default GuessNumberGame;