import './item.css'

const Item = ({producto}) => {
    return(
    <div>
        <div className="card">
            <img src={producto.image} className="card-img-top" alt={producto.name} />
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p>Código: {producto.id}</p>
                <p>${producto.price}</p>
                <p className="description">{producto.description}</p>
                <a href="#" className="btn btn-success">Ver mas</a>
            </div>
        </div>
    </div>
    )
}

export default Item