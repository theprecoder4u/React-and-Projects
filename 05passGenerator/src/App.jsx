import { useState, useCallback } from 'react'
//import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[num, setNum] = useState(false)
  const[char, setChar] = useState(false)
  const[password, setPass] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="0123456789"
    if(char) str+="!@#$%^&*~_-+="

    for (let i = 0; i < str.length; i++) {
      let char = Math.floor(Math.random() *str.length + 1)
      pass = str.charAt(char)
    }

    setPass(pass)

  }, [length,num,char,setPass])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray'>
      test
    </div>
    </>
  )
}
export default App
