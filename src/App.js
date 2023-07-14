import './App.css';
import { useState } from 'react'

function App() {
  //state -to hold initial value ,name of state-(counter)
  //setCounter - used to increment
  const [counter, setCounter] = useState(0)

  //create a function for increment counter
  function incrementCounter() {
    setCounter(counter + 1)
  }

  //create a function  for decrementing counter
  function decrementCounter() {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }

  //create a function for reset
  function resetCounter() {
    setCounter(0)
  }

  return (
    <div 
    style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
          margin:'auto',
          marginTop:'135px',
          marginBottom:'135px',
      border:'1px solid black',
      width:'500px',
            padding:'15px'
    }}
    className="App">
      <header className="App-header">
        <h3>Counter App</h3>
        <h1>{counter}</h1>
        <button 
        style={{
          backgroundColor:'green',
          color:'white',
          padding:'14px',
          margin:'5px',
          border:'2px solid white'

        }}
        onClick={incrementCounter}>Increment</button>
        <button 
        style={{
          backgroundColor:'red',
          color:'white',
          padding:'14px',
          margin:'5px',
          border:'2px solid white'

        }}
        
        onClick={decrementCounter}>Decrement</button>
        <button
         style={{
          backgroundColor:'black',
          color:'white',
          padding:'14px',
          margin:'5px',
          border:'2px solid white'

        }}
        onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
  }

export default App;
