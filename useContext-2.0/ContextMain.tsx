import { createContext, useState } from "react"
import { Home2 } from "./components/Home2"

export const Context  = createContext();
export const ContextMain = () =>{

    const [value, setValue] = useState('Value Data');
    return <div>
        Conetext Main
    <Context.Provider value={{value, setValue}}>
        <Home2/>
    </Context.Provider>
    </div>
}