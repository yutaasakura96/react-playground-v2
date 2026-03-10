import type { PlayerSymbol, Turn } from '../App';

type GameBoardType = (PlayerSymbol | null)[][];

const initialGameBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: Turn[];
}
const GameBoard = ({ onSelectSquare, turns }: GameBoardProps) => {
  const gameBoard = initialGameBoard.map((row) => [...row]);
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
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
