import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsTrash } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import './cartView.css'

const CartView = () => {
    const { cart, removeItem, cartPriceTotal, clear } = useContext(CartContext)

    return (
        <div>
            <h3 className='text-success m-3'>Carrito de compras</h3>
            <div>
                {cart.map((compra) => {
                    return (
                        <div className='carrito-compras border-bottom' key={compra.id}>
                            <img src={compra.image} alt={compra.name} />
                            <span className='text-uppercase fst-italic'>{compra.name}</span>
                            <span>Unidades: {compra.quantity}</span>
                            <span>${compra.price}</span>
                            <span>Total: ${compra.price * compra.quantity}</span>
                            <BsTrash className='btn-eliminar' onClick={() => removeItem(compra.id)} />
                        </div>
                    )

                })}
            </div>
            <p className='ms-5 mt-5'>TOTAL A PAGAR: ${cartPriceTotal()} </p>
            <NavLink to="/" className="btn btn-success ms-3">
                Seguir Comprando
            </NavLink>
            <button className='btn btn-danger ms-2' onClick={clear}>Vaciar el carrito</button>
        </div>

    )
}

export default CartView
