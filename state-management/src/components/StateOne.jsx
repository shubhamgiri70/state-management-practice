import "../App.css";
import { useEffect, useState, useRef } from "react";

const StateOne = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  //   useEffect(() => {
  //     // the code we want to run
  //     console.log("the cunt is:", count);
  //   }, [count]); // the dependency arrey

  const handleInc = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("state", count);
    console.log("ref", countRef.current);
  };

  return (
    <center>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={handleInc}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </center>
  );
};

export default StateOne;
