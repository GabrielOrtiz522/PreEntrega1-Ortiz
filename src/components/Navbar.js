import CardWidget from "./CardWidget"

const Navbar = () => {
    return (
        <header className="header">

            <a href="#"> <img src="../img/isotipo.png" alt="Isotipo" /> </a>

            <nav className="nav-contenedor">

                <a href="#"> Catálogo </a> 

                <a href="#"> ¿Quienes Somos? </a>

                <a href="#"> Contacto </a>

            </nav>

            <CardWidget/>

      </header>
    )
}

export default Navbar