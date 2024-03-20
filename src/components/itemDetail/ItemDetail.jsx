import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import './itemDetail.css'

const ItemDetail = ({ producto }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [compra, setCompra] = useState(false)
    const {addItem} = useContext(CartContext)
    
    const onAdd = (cantidad) => {
        addItem(producto,cantidad)
        setCompra(true)
    }


    return (

        <div className="container">
            <div className="producto-detalle">
                <img src={producto.image} alt={producto.name} />
                <div>
                    <h5>{producto.name}</h5>
                    <p>Categoría: {producto.category}</p>
                    <p>Precio:
                        ${producto.price}</p>
                    <p>{producto.description}</p>
                    {compra ? <button className='btn btn-success'>Ir al Carrito</button> : <ItemCount stock={producto.stock} onAdd={onAdd} />}
                </div>
            </div>

        </div>
    )
}

export default ItemDetail
