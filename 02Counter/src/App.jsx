import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15 ;

  const addValue = () => {
     counter = counter + 1; 
     if (counter >= 22){
      counter = 22;
     }
     setCounter(counter);
  }

  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0){
      counter = 0;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

       <button onClick={addValue}>Add Value</button>
        <br/>
       <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
