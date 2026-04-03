import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-shadow-amber-100 text-black
    p-4 rounded-xl mb-4'>Tailwind CSS Test</h1>
    <Card username="Preetam aur code" btntext = "Click Me"/>
    <Card username="Chai Aur Code"/>
    </>
  )
}

export default App
