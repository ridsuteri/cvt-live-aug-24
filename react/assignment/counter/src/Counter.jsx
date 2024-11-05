import React, { useState } from "react";

const Counter = ({count, setCount}) => {
  
    const increment = ()=>{
        setCount(++count);
      }
    
      const decrement = ()=>{
        if(count>0){
            setCount(--count);
        }
      }

  return (
    <>
      <div> Counter: {count} </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
