import { useState } from "react";
// UI: count display, step input, increment button, decrement button, reset button
// State: count, step
// Events: change step value, increment, decrement, reset
// Mental Model:
// 1. UI - What should the user see?
// 2. State - What data changes over time?
// 3. Events - What can the user do?
// 4. Handlers - How do events update state?
// 5. Derived values - Optional values computed from state
// 6. Wiring - Connect state and handlers to the UI
const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + step);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - step);
  };

  const handleReset = () => {
    setCount(0);
  };
  const handleChange = (e) => {
    setStep(Number(e.target.value));
  };
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <label>
          Step:
          <input type="number" value={step} onChange={handleChange} />
        </label>
      </div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;
