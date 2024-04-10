import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsTrash } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './cartView.css'

const CartView = () => {
    const { cart, removeItem, cartPriceTotal, clear } = useContext(CartContext)

    return (
        <div>
            <h3 className='text-success m-3 mt-5'>Estado de tu compra</h3>
            <div>
                {cart.map((compra) => {
                    return (
                        <div className='carrito-compras border-bottom' key={compra.id}>
                            <img src={compra.image} alt={compra.name} />
                            <span className='text-uppercase fst-italic'>{compra.name}</span>
                            <span>Cant: {compra.quantity}</span>
                            <span>${compra.price}</span>
                            <span>Subtotal: ${compra.price * compra.quantity}</span>
                            <BsTrash className='btn-eliminar' onClick={() => removeItem(compra.id)} />
                        </div>
                    )

                })}
            </div>
            <h6 className='ms-5 mt-5 mb-3'>
                <span className="fw-bold">TOTAL:</span> ${cartPriceTotal()}
            </h6>
            <div>
                <Link to="/" className="btn btn-success ms-3">Seguir Comprando</Link>
                <button className='btn btn-danger ms-2' onClick={clear}>Vaciar el carrito</button>
            </div>
            <Link to="/checkout" className="btn-finalizar btn btn-success ms-3 mt-2">Finalizar compra</Link>
        </div>

    )
}

export default CartView
