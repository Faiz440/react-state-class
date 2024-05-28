import { useState } from "react";
function init() {
  console.log("init was executed");
  return Math.random();
}

export default function Counter() {
  const [count, setCount] = useState(init());
  console.log("componet was render");
  // console.log("compnte is render");

  // console.log(`count = ${count}`);

  let inCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
  };
  return (
    <div>
      <h3>Count= {count}</h3>
      <button onClick={inCount}>incers puls</button>
    </div>
  );
}
