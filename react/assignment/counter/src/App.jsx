import { useState } from "react";
import Counter from "./Counter"

function App() {

  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  const resetCounters = ()=>{
    setCount1(0);
    setCount2(0);
  }

  return (
    <>
      <h2>Counter kingdom</h2>
      <Counter count={count1} setCount={setCount1} />
      <hr />
      <Counter count={count2} setCount={setCount2} />
      <hr />
      <button onClick={resetCounters}>Reset Counters</button>
    </>
  )
}

export default App
