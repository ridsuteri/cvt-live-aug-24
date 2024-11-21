import { useState } from "react";

import "./App.css";
import { useMemo } from "react";
import Child from "./Child";
import { useCallback } from "react";

let unrelatedYetHeavyComputation = () => {
  console.log("doing heavy calcualtions");
  return 10;
};


function App() {
  let [count, setCount] = useState(0);
  let [dependentCount, setDependentCount] = useState(0);

  // here we are memoizing the value of the function call
  // useMemo(unrelatedYetHeavyComputation, [dependentCount]);


  // here we want to memoize the reference of whole function .....
  let callbackFunction = useCallback(()=>{
    console.log('callback function running')
  },[dependentCount])

  return (
    <>
      <div>
        {count} <br />
        <button
          onClick={() => {
            setCount(++count);
          }}
        >
          +
        </button>{" "}
        <br />
        <button
          onClick={() => {
            setDependentCount(++dependentCount);
          }}
        >
          + (dependentCount)
        </button>
      </div>
      <Child fun={callbackFunction} />
    </>
  );
}

export default App;
