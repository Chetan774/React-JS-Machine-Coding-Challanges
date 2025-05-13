import { useEffect, useRef, useState } from "react"

export const UseRef = () =>{
    const previousState = useRef('');
    const [value, setValue] = useState('');


    useEffect(()=>{
       previousState.current = value;
    },[value]);



    return <div>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button>Click</button>
       <h2>Current State:{value}</h2>
       <h1>Render previousState: {previousState.current}</h1>
    </div>
}