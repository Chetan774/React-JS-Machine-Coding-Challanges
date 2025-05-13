import { useContext } from "react"
import { Context } from "../ContextMain"

export const Blog2 = () =>{
    const value = useContext(Context)
    value?.setValue('New Value');
    return <div>
        <div>Blog2</div>
        <span>{value?.value}</span>
    </div>
}