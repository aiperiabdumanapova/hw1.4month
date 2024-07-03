import { useState } from "react";
import Home from "./Home";
import Page from "./Page"

function App() {
  const [num, setNum] = useState(0);
  const [Aiperi, setAiperi] = useState('Aiperi')

  return (
    <div className="App">
      <h1>{num}</h1>
      <h1>{Aiperi}</h1>
      
      <button onClick={()=>{
        if(num < 15) setNum(num + 1)
      }}>+1</button>

      <button onClick={()=>{
        if(num > 0) setNum(num - 1)
      }}>-1</button>

      <button onClick={()=>{
        setNum(0)
      }}>reset</button>

      <button onClick={() => {
        if (num <= 0) setNum(num + 5)
          else {setNum(15)}
      }}>+5</button> 

      <button onClick={() => {
        if (num >= 5) setNum(num - 5)
          else {setNum(0)}
      }}>-5</button>

      

    </div>
  );
}

export default App;
