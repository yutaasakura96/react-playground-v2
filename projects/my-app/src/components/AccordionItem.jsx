// UI: accordion item, button to open and close,
// State: isOpen
// Events: header click, open/close
// Derived values:
// Wiring:

import { useState } from "react";

// Mental Model:
// 1. UI - What should the user see?
// 2. State - What data changes over time?
// 3. Events - What can the user do?
// 4. Handlers - How do events update state?
// 5. Derived values - Optional values computed from state
// 6. Wiring - Connect state and handlers to the UI

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleAccordion}>
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <div>{isOpen && children}</div>
    </div>
  );
};

export default AccordionItem;
