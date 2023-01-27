"use client";
import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: false },
    { todoText: "todo 3", completed: true },
  ]);
  const onClickHandler = (meraarug1: any) => {
    console.log(meraarug1);
    const newTodos = todos.map((arug2) => {
      if (arug2.todoText == meraarug1.todoText) {
        arug2.completed = !arug2.completed;
      }
      return arug2;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodos = { todoText: todo, completed: false };
    const newTodo = [...todos, newTodos];
    setTodos(newTodo);
    setTodo("");
  };
  const deleteTodo = (mereTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == mereTodo.todoText) return false;
      return true;
    });
    console.log("old todos " + todos + "new todos " + newTodos);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "goldenrod" }}>Todo App</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo} style={{ backgroundColor: "blue" }}>
        Add
      </button>
      <ul>
        {todos.map((arug1) => {
          return (
            <li
              style={{
                color: arug1.completed === true ? "green" : "red",
                fontStyle: "italic",
                listStyleType: "none",
              }}
            >
              <input
                type="checkbox"
                checked={arug1.completed}
                onChange={() => onClickHandler(arug1)}
              />
              {arug1.todoText}
              <br />
              <button
                style={{ backgroundColor: "yellow" }}
                onClick={() => deleteTodo(arug1)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
