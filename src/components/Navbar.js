import { NavLink, Link } from "react-router-dom";
import CardWidget from "./CardWidget";

import logo from "./img/isotipo.png";

const Navbar = () => {
  return (
    <div className="contenedor-link">
      
      <Link to="/">
        <img src={logo} alt="Isotipo" width="50px" />
      </Link>

      <nav className="nav-contenedor">

        <NavLink to={"/productos/ropa"} className="nav-link"> Ropa </NavLink>

        <NavLink to={"/productos/accesorios"} className="nav-link"> Accesorios </NavLink>
 
        <NavLink to={"/productos/tecnologia"} className="nav-link"> Tecnologia </NavLink>
        
      </nav>

      <Link to="/cart"> <CardWidget /> </Link>
      

    </div>
  );
};

export default Navbar;
