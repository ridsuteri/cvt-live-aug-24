import React,{memo} from 'react'

const Child = ({fun}) => {
    fun();

  return (
    <div>Child</div>
  )
}

export default  memo(Child)