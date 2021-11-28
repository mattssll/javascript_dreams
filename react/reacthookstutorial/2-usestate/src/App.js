import React from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const inc = () => { setCounter(counter + 1); };
  const dec = () => { setCounter(counter - 1); };

  return (
    <div className="App">
      <h1>Part 2: The State Hook</h1>
      <p>Counter: {counter}</p>
      <div>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
      </div>
    </div>
  );
}

