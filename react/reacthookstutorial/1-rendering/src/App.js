import React from "react";
import "./styles.css";

export default function App() {
  const username = 'miguel';
  const todos = [
    'buy groceries',
    'buy newspaper',
  ]

  return (
    <div className="App">
      <h1>Part 1: Rendering</h1>
      {username ?
        <h2>Hello, {username}!</h2>
      :
        <h2>Hello, Stranger!</h2>
      }

      {username &&
        <p>Logout</p>
      }

      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}
