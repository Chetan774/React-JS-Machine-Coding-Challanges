import {Link, Outlet} from 'react-router-dom'
export const Layout = () => {
  return (
    <div>
      Inside Layout
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link> 
      </nav>
      <Outlet />
    </div>
  );
};