import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter]  = useState(0)
  // let counter = 0
  const addValue = () => {
    if(counter===20){return;}
    counter = counter + 1;
    setCounter(counter)
    console.log("Clicked", counter);
  }

  const removeValue = () => {
    if(counter===0){return;}
    counter = counter - 1
    setCounter(counter)
    console.log("Clicked", counter);
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
