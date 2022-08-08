import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  //decrements counter
  const decrement = () => setCount((prevCount) => prevCount - 1);

  //increments counter
  const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div className="wrapper">
      <div className="container">
        <button className="button button-decrease" onClick={decrement}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="button button-increase" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
