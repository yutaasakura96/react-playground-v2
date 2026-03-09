import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import Player from './components/Player';

export type PlayerSymbol = 'X' | 'O';
export type Turn = {
  square: {
    row: number;
    col: number;
  };
  player: PlayerSymbol;
};

const deriveActivePlayer = (gameTurns: Turn[]): PlayerSymbol => {
  let currentPlayer: PlayerSymbol = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
};

const App = () => {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns: Turn[] = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
