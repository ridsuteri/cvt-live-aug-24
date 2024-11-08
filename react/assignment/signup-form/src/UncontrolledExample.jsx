import React, { useRef, useState } from 'react'

function UncontrolledExample() {
    let inputRef = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log('value of input')
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <input type="text" placeholder='name here ...' ref={inputRef} />
        <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default UncontrolledExample