import type { GameBoardType } from '../App';

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: GameBoardType;
}
const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {
  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={`${rowIndex}-${colIndex}`}>
              <button
                onClick={() => {
                  onSelectSquare(rowIndex, colIndex);
                }}
                disabled={playerSymbol !== null}
              >
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

export default GameBoard;
