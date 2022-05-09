import { useState, useEffect } from 'react';
import './App.css';

function App() { 
  let counter= 0;//변수는 rerender, 초기화. 
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter += 1 //sync.
    setCounter2(counter2 +1);//async function. 한박자 늦어.
    setValue(value + 2);
    console.log("counter: ", counter, "counter2 :", counter2);
  }

  useEffect(() => {
    console.log("useEffect1 fire!")
  }, [] )

  useEffect(() => {
    console.log("useEffect2 fire!!", counter2, value)
  }, [counter2, value])

  return (
    <div>
    {console.log("render")} 
     <div>{counter}</div>
     <div>state: {counter2}</div>
     <button onClick={increase}>Click!</button>
    </div>
  );
}

export default App;
