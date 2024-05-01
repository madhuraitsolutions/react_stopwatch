import { useEffect, useState } from "react"
import './style.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  
  // useEffect(()=>{ 
    // the code that we want to execute
    // optional retun function
  //},[ dependency array ]) 
  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-semibold">01. Stopwatch</h1>
      <div className="text-xl font-semibold py-4">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>  {/* 1m = 60000ms = 60 * 1000ms */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>  {/*1000ms = 1s */}
        <span>{("0" + (time / 10) % 100).slice(-2)}</span>
      </div>
      <div className="max-w-sm w-1/3 flex flex-row justify-between">
        {/* Conditional rendering */}
        {running ? (
          <button className="border rounded-lg px-3 py-2"
            onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button className="border rounded-lg px-3 py-2"
            onClick={() => setRunning(true)}>Start</button>
        )}
        <button className="border rounded-lg px-3 py-2"
          onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
