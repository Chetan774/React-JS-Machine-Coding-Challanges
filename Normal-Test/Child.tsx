import { forwardRef } from "react"

export const Child = forwardRef((props, ref) =>{
    return <div>
        Child
        <input type="text" ref={ref} />
    </div>
})