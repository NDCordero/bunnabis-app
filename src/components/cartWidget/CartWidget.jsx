import {TiShoppingCart} from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
import './cartwidget.css'

const CartWidget = ({counter}) => {
    return (
        <div className='ms-auto'>
            <TiShoppingCart fontSize= {'1.6rem'}/>
            <Badge bg='success'>{counter}</Badge>
        </div>
    )
}

export default CartWidget