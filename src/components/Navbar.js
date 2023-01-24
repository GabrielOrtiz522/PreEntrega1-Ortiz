import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

import logo from "./img/isotipo.png";

const Navbar = () => {
  return (
    <div className="contenedor-link">
      
      <Link to="/">
        <img src={logo} alt="Isotipo" width="50px" />
      </Link>

      <nav className="nav-contenedor">

        <Link to={"/productos/ropa"}> Ropa </Link>

        <Link to={"/productos/accesorios"}> Accesorios </Link>

        <Link to={"/productos/tecnologia"}> Tecnologia </Link>
      </nav>

      <Link to="/cart"> <CardWidget /> </Link>
      

    </div>
  );
};

export default Navbar;
