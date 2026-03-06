const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = () => {
  return (
    <ol id='game-board'>
      {initialGameBoard.map((row, rowIndex) => (
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={`${rowIndex}-${colIndex}`}>
              <button>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

export default GameBoard;
