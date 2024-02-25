import {TiShoppingCart} from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({counter}) => {
    return (
        <div className="ms-5">
            <TiShoppingCart className="ms-5" fontSize= {'1.6rem'}/>
            <Badge bg='success'>{counter}</Badge>
        </div>
    )
}

export default CartWidget