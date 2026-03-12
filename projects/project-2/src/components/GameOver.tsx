interface GameOverProps {
  winner: string | null;
  onRestart: () => void;
}

const GameOver = ({ winner, onRestart }: GameOverProps) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && (
        <p>
          <span className='winner-name'>{winner}</span> is the winner!
        </p>
      )}
      {!winner && <p>It's a Draw</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
