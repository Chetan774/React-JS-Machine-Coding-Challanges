import { Blogs } from "./components/Blogs"
import { Contacts } from "./components/Contacts"
import { Home } from "./components/Home"
import { Layout } from "./components/Layout"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export const Main = () =>{
    return  (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/blogs" element={<Blogs/>}></Route>
            <Route path="*" element={<Contacts/>}></Route>
        </Routes>
    </BrowserRouter>)
    
}