import { useState } from 'react';

type PlayerSymbol = 'X' | 'O';
type GameBoardType = (PlayerSymbol | null)[][];

const initialGameBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>(initialGameBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = prevGameBoard.map((innerArray) => [...innerArray]);
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  };

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={`${rowIndex}-${colIndex}`}>
              <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

export default GameBoard;
