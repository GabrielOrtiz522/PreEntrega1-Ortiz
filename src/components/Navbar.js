import CardWidget from "./CardWidget";

import logo from "../img/isotipo.png";

const Navbar = () => {
  return (
    <div className="contenedor-link">
      <a href="#">
        {" "}
        <img src={logo} alt="Isotipo" width="50px" />{" "}
      </a>

      <nav className="nav-contenedor">
        <a href="/src/index.js"> Inicio </a>

        <a href="#"> Catálogo </a>

        <a href="#"> Contacto </a>
      </nav>

      <CardWidget />

    </div>
  );
};

export default Navbar;
