// UI: button displaying ON/OFF with dynamic styling
// State: current state
// Events: change state
// Mental Model:
// 1. UI - What should the user see?
// 2. State - What data changes over time?
// 3. Events - What can the user do?
// 4. Handlers - How do events update state?
// 5. Derived values - Optional values computed from state
// 6. Wiring - Connect state and handlers to the UI

import { useState } from "react";

const Toggle = ({ initialState = false, onToggle }) => {
  const [currentState, setCurrentState] = useState(initialState);

  const handleToggle = () => {
    const newState = !currentState;
    setCurrentState(newState);
    onToggle?.(newState);
  };
  return (
    <button
      onClick={handleToggle}
      style={{
        padding: "10px 20px",
        backgroundColor: currentState ? "#4CAF50" : "#ccc",
        color: currentState ? "white" : "black",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
    >
      {currentState ? "ON" : "OFF"}
    </button>
  );
};

export default Toggle;
