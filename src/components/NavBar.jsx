import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";


function NavBar() {

  return (
     <nav>
        <ul>
      <NavLink id="link" to="/" className="navLink">
        Home
      </NavLink>
      <NavLink id="link" to="/my-staxx" className="navLink">
        My Staxx
      </NavLink>
      <NavLink id="link" to="/add-album" className="navLink">
        Add an Album
      </NavLink>
      </ul>
    </nav>
  );
  
}

export default NavBar;



  
