import { useRef } from "react"
import { Child } from "./Child"

export const ForwardRef = () =>{
    const reference = useRef('');
    const handleClick = () =>{
        reference.current.focus();
    }
    return <div>ForwardRef
        <Child ref={reference}/>
        <button onClick={handleClick}>Button</button>
    </div>
}