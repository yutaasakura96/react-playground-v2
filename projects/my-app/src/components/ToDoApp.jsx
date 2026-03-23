import { useState } from "react";
// Problem → English → Pattern → Code

// Array problem?
// Add → spread
// Update → map
// Delete → filter
// Filter view → filter

// UI: Todo List, add input + button = form, toggle complete input checkbox strike through, delete button, filter dropdown (All / Active / Completed)
// State: toDoList, input, filter
// Events: form submit, filter change, delete, toggle checkbox
// Derived values: filteredTodos, remainingCount
// Wiring:
// Mental Model:
// 1. UI - What should the user see?
// 2. State - What data changes over time?
// 3. Events - What can the user do?
// 4. Handlers - How do events update state?
// 5. Derived values - Optional values computed from state
// 6. Wiring - Connect state and handlers to the UI

const ToDoApp = () => {
  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newToDo = {
      id: Date.now(),
      title: trimmedInput,
      completed: false,
    };

    setToDoList((prev) => [...prev, newToDo]);
    setInput("");
  };

  const deleteToDoHandler = (id) => {
    setToDoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setToDoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const filteredTodos = toDoList.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remainingCount = toDoList.filter((todo) => !todo.completed).length;

  return (
    <div>
      <h1>Todo List</h1>
      <p>Remaining count: {remainingCount}</p>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <ul>
        {filteredTodos.map((toDo) => (
          <li
            key={toDo.id}
            style={{
              textDecoration: toDo.completed ? "line-through" : "none",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          >
            <input
              type="checkbox"
              checked={toDo.completed}
              onChange={() => toggleTodoHandler(toDo.id)}
            />
            <span>{toDo.title}</span>
            <button onClick={() => deleteToDoHandler(toDo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
