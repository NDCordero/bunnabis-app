import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({ producto }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={producto.image} alt={producto.name} />
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p>${producto.price},00</p>
                <p>{producto.description}</p>
                <ItemCount stock={producto.stock} />
                <a href="#" className="btn btn-success">Ver mas</a>
            </div>

        </div>
    )
}

export default ItemDetail
