import { useState } from 'react'
import './App.css'
import ConditionalComponent from './ConditionalComponent'

function App() {
  const [showComponent, setShowComponent] = useState(true)
  return (
    <>
    {showComponent && <ConditionalComponent/>}
    <button onClick={()=>{setShowComponent(!showComponent)}}>Toggle Component</button>
    </>
  )
}

export default App
