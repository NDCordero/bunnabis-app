import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({ producto }) => {
    return (


        <div className="container">
            <div  className="producto-detalle">
                <img className="card-img-top" src={producto.image} alt={producto.name} />
                <div>
                    <h5 className="card-title">{producto.name}</h5>
                    <p>Categoría: {producto.category}</p>
                    <p>Precio:
                        ${producto.price},00</p>
                    <p>{producto.description}</p>
                    <ItemCount stock={producto.stock} />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail
