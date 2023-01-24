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

        <NavLink to={"/productos/ropa"}> Ropa </NavLink>

        <NavLink to={"/productos/accesorios"}> Accesorios </NavLink>

        <NavLink to={"/productos/tecnologia"}> Tecnologia </NavLink>
      </nav>

      <Link to="/cart"> <CardWidget /> </Link>
      

    </div>
  );
};

export default Navbar;
