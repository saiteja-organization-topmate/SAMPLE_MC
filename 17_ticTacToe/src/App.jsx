import { useState } from 'react';
import './App.css';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  //handleClick, to mutate the existing board, store this newBoard in the squares state
  const handleClick = (i) => {
    if(winner) return
    const newSquares = [...squares];
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (i) => {
    return <button className="square" onClick={() => handleClick(i)}>{squares[i]}</button>;
  };

  const calculateWinner = () => {
    let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  let winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner is: ${winner} 🎁🎉💥`;
  } else {
    status = `Next Player: ${isXNext ? 'X' : 'O'}`;
  }

  const resetGame = () => {
    setIsXNext(true);
    setSquares(Array(9).fill(null));
  };

  return (
    <div className='app_container'>
      <div className='status'>{status}</div>
      {[0, 1, 2].map((row) => (
        <div key={row} className='row'>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
      <button className="resetGame" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;
