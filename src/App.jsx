import { useState } from "react";
function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const playr1 = "X";
  const playr2 = "O";
  const [playrMoves1, setPlayrMoves1] = useState([]);
  const [playrMoves2, setPlayrMoves2] = useState([]);
  const [currentMoves, setCurrentMoves] = useState(playr1);

  function isWinningCombination(combination, winningCombination) {
    for (const winCombo of winningCombination) {
      if (winCombo.every((cell) => combination.includes(cell))) {
        return true;
      }
    }
    return false;
  }
  function moves(event) {
    event.target.disabled = true;
    event.target.textContent = currentMoves;
    if (currentMoves === playr1) {
      setPlayrMoves1([...playrMoves1, +event.target.id]);
      setCurrentMoves(playr2);
      board[+event.target.id] = playr1;
    } else {
      setPlayrMoves2([...playrMoves2, +event.target.id]);
      setCurrentMoves(playr1);
      board[+event.target.id] = playr2;
    }
  }
  return (
    <>
      <h1>Крестики нолики</h1>

      {isWinningCombination(playrMoves1, winningCombination) ? (
        <>
          <h1>Победил X</h1>
          <div className="board">
            {board.map((item, index) => (
              <div key={index} id={index} className="cell">
                {item}
              </div>
            ))}
          </div>
        </>
      ) : isWinningCombination(playrMoves2, winningCombination) ? (
        <>
          <h1>Победил O</h1>
          <div className="board">
            {board.map((item, index) => (
              <div key={index} id={index} className="cell">
                {item}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="board">
          {board.map((item, index) => (
            <div
              onClick={item === "" ? (event) => moves(event) : null}
              key={index}
              id={index}
              className="cell"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
