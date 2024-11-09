import React, { useEffect, useState } from 'react'

const ConditionalComponent = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  // mounting phase
  // useEffect(()=>{
  //   console.log('useEffect being called [mounting] !!!!!')
  // },[])

  useEffect(()=>{
    console.log('[normal ] useEffect being called [updation] !!!!!', count)

    return ()=>{
      console.log('[unmount] useEffect being called [unmounting] !!!!!', count)
    }
  },[count])

  // unmounting
  useEffect(()=>{
    return ()=>{
      console.log('useEffect being called [unmounting] !!!!!')
    }
  },[])

  return (
    <div style={{border:"2px solid white", margin:"2rem", padding:"1rem"}}>
      <h3>This is a conditional component</h3>
      <div>Count: {count}</div>
      <button onClick={()=>setCount(++count)}>Increase count</button>

      <div>Count2: {count2}</div>
      <button onClick={()=>setCount2(++count2)}>Increase count 2</button>
    </div>
  )
}

export default ConditionalComponent