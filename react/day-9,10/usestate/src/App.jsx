

import { useState } from 'react'
import './App.css'

function App() {


  let [counter, setCounter] = useState(10)
// ////////////////////////////////////
  let countIn=()=>{
   setCounter(counter+1)
  }

  // ////////////////////////////
  let counterDe=()=>{

    if(counter>1){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <button onClick={counterDe} > - </button>
      <button onClick={()=>setCounter(counter-1) }  > - </button>
      <h1> My Product is {counter} </h1>
      <button onClick={countIn} > + </button>

       <button onClick={()=>setCounter(counter+1) } > + </button>
    </>
  )
}

export default App
