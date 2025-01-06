import "../App.css";
import { useState } from "react";

const StateOne = () => {
  const [count, setCount] = useState(0);

  return (
    <center>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </center>
  );
};

export default StateOne;
