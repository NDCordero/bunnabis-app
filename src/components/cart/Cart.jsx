import React, { useContext } from 'react'
import CartView from '../cartView/CartView'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <div>
      {!cart.length ?
        <div>
          <h3 className='mt-4 mb-5 ms-3 text-success'>Tu carrito esta vacío!</h3>
          <h4 className='mb-4 ms-3'>Te invitamos a ver todos nuestros productos!</h4>
          <Link className='mb-3 ms-3 btn btn-success' to='/'>Ir a ver los productos</Link>
        </div> :
        <CartView />}
    </div>
  )
}

export default Cart
