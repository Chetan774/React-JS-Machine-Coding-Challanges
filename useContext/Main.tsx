import { createContext, Dispatch, SetStateAction, useState } from "react"
import { Home } from "./components/Home"


export const Context  = createContext()

export const Main = () =>{
    const [value, setValue] = useState('Value From Main Component');
    const data  =  {
        value, 
        setValuea
    }
    return <div>
        Context Main
        <Context.Provider value={{value, setValue}}>
            <Home/>
        </Context.Provider>
    </div>
}