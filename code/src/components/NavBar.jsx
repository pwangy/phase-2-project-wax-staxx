import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <NavLink id='link' to='/' className='nav-link'>Home</NavLink>
        <NavLink id='link' to='/my-staxx' className='nav-link'>My Staxx</NavLink>
        <NavLink id='link' to='/add-album' className='nav-link'>Add an Album</NavLink>
    </nav>
)}

export default NavBar
