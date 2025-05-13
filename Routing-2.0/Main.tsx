import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from './Components/Layout'
import { Home } from '../RoutingHomePage/components/Home'
export const  Main = () =>{
    return(
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Layout/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
           </Routes>
        </BrowserRouter>
    )
}