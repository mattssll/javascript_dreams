import React from "react";
import "./styles.css";
import Child from './Child.js';
import Child2 from './Child2.js';

export default function App() {
  console.log('App');
  const [counter, setCounter] = React.useState(0);
  
  const reset = React.useCallback(() => { setCounter(0); }, []);

  return (
    <div className="App">
      <h1>Part 7: Memoization</h1>
      <p>Counter: {counter}</p>
      <Child step={1} setCounter={setCounter} />
      <Child step={5} setCounter={setCounter} />
      <Child2 reset={reset} />
    </div>
  );
}

