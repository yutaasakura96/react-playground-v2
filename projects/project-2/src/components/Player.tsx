import { useState } from 'react';

interface PlayerProps {
  name: string;
  symbol: string;
}
const Player = ({ name, symbol }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  let playerName = <span className='player-name'>{name}</span>;

  if (isEditing) {
    playerName = <input className='player-name' type='text' required />;
  }
  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
