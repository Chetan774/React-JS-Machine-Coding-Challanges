import { useContext } from "react";
import { Context } from "../Main";

export const Blog = () =>{
    const value  = useContext(Context);
    value?.setValue('New changed value');
    return <div>
        <span>Conetxt Blog</span>
        <div>{value?.value}</div>
    </div>
}