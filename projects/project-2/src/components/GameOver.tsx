import type { PlayerSymbol } from '../App';

interface GameOverProps {
  winner: PlayerSymbol | null;
}

const GameOver = ({ winner }: GameOverProps) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} is the winner!</p>}
      {!winner && <p>It's a Draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
