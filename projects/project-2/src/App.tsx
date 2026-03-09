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

const App = () => {
  const [activePlayer, setActivePlayer] = useState<'X' | 'O'>('X');
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer: 'X' | 'O' = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
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
