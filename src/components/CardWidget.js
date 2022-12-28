import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Card() {
    return (
        <div className="carrito-compras">
            <FontAwesomeIcon icon={faCartShopping}/> <span> 0 </span>
        </div>
        
    );
}

export default Card;