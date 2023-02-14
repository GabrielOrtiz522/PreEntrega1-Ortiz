import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useCarrito } from "./CustomProvider";

function CardWidget() {

    const {totalProductos} = useCarrito()
    

    return (
        <div className="carrito-compras">
            <FontAwesomeIcon icon={faCartShopping}/>
            {totalProductos}
        </div>
        
    );
}

export default CardWidget;