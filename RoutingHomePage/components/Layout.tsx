import {Outlet, Link} from 'react-router-dom'
import './Layout.css'


export const Layout = () =>{
    return <div>
        <nav className='layout'>
            <span className='item'>Layout HomePage</span>
            <Link  to='/home' >Home</Link>
            <Link to='/blogs'>Bogs</Link>
            <Link to='*'>Contact</Link>
        </nav>
        <Outlet/>
    </div>
}