import { useRef, useState } from "react"
import { Child } from "./Child"

export const Main = () =>{
    const reference = useRef('');
    const handleClick = () =>{
        reference.current.focus();
    }
    return <div>
        Main
        <Child ref={reference} />
        <button onClick={handleClick}>click</button>
    </div>
}