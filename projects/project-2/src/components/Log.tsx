import type { Turn } from '../App';

interface LogType {
  turns: Turn[];
}

const Log = ({ turns }: LogType) => {
  return (
    <ol id='log'>
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
