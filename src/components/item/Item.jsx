import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div>
            <div className="card card-shadow">
                <img src={producto.image} className="card-img-top" alt={producto.name} />
                <div className="card-body">
                    <h6 className="card-title">{producto.name}</h6>
                    <p className="text-capitalize">Categoría: {producto.category}</p>
                    <p>${producto.price}</p>
                    <Link className="btn btn-success" to={`/item/${producto.id}`}>Ver mas</Link>
                </div>
            </div>
        </div>
    )
}

export default Item