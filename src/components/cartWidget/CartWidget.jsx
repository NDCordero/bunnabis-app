import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react"
import './cartwidget.css'


const CartWidget = ({ counter }) => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <div className='ms-auto'>
            <TiShoppingCart className="carrito" />
            {cartQuantity() > 0 && <Badge bg='success'>{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidget