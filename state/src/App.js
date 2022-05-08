import { useState } from 'react';
import './App.css';

function App() { 
  let counter= 0;//변수는 rerender, 초기화. 
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter += 1 //sync.
    setCounter2(counter2 +1);//async function. 한박자 늦어.
    console.log("counter: ", counter, "counter2 :", counter2);
  }
  return (
    <div >
     <div>{counter}</div>
     <div>state: {counter2}</div>
     <button onClick={increase}>Click!</button>
    </div>
  );
}

export default App;
