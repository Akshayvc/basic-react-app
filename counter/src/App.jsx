import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addValue() {
    setCount((count) => count + 1);
  }

  function removeValue() {
    if (count === 0) return;
    setCount((count) => count - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>value:{count} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
