import { useState } from 'react';

interface PlayerProps {
  initialName: string;
  symbol: string;
}
const Player = ({ initialName, symbol }: PlayerProps) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        className='player-name'
        type='text'
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }
  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
