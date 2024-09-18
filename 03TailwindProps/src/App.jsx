import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Pic from './components/Pic'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "Harshvarhdan",
    password : "14236"
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Css</h1>
      {/* <Card username="code" code={myObj} myArr={myArr} btntext="click me"/>
      <Card username="imali" btntext="visit me"/>
      <Card username="imali" /> */}
      
      <Pic name="Harshvardhan" name1="karan" />
    </>
  )
}

export default App
