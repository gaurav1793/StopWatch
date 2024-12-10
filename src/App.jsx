
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time,setTime]=useState(0);
  let x =useRef(null);
  function handleStart(){
    x.current=setInterval(() => {
      setTime(time=>time+1)
    }, 1000);
  }
  function handleStop(){
    clearInterval(x.current);
    x.current=null;
  }
  function handleReset(){
    handleStop()
    setTime(0);
  }
  return (
    <>
      <div className='gk'>
        <h1>StopWatch : {time} seconds</h1>
        <button onClick={handleStart}>start</button>
        <br/><br/>
        <button onClick={handleStop}>stop</button>
        <br/><br/>
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  )
}

export default App
