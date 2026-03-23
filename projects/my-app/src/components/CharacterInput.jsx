// UI: text input, character count display, max limit display, warning color near limit, disabled input at limit
// State: text
// Events: user types in the input
// Derived values - characterCount, isNearLimit, isAtLimit
// Wiring - Connect input value, onChange, disabled state, and conditional styling

// Mental Model:
// 1. UI - What should the user see?
// 2. State - What data changes over time?
// 3. Events - What can the user do?
// 4. Handlers - How do events update state?
// 5. Derived values - Optional values computed from state
// 6. Wiring - Connect state and handlers to the UI

import { useState } from "react";

const CharacterInput = ({ maxLength = 100 }) => {
  const [text, setText] = useState("");

  const characterCount = text.length;
  const isNearLimit = characterCount >= maxLength * 0.9;
  const isAtLimit = characterCount >= maxLength;

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= maxLength) {
      setText(value);
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} disabled={isAtLimit} />

      <p style={{ color: isNearLimit ? "red" : "white" }}>
        {characterCount} / {maxLength}
      </p>
    </div>
  );
};

export default CharacterInput;
