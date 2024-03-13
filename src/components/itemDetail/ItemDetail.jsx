import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({ producto }) => {
    return (


        <div className="container">
            <div  className="producto-detalle">
                <img src={producto.image} alt={producto.name} />
                <div>
                    <h5>{producto.name}</h5>
                    <p>Categoría: {producto.category}</p>
                    <p>Precio:
                        ${producto.price}</p>
                    <p>{producto.description}</p>
                    <ItemCount stock={producto.stock} />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail
