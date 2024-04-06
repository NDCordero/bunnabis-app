import React, { useContext, useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './itemDetail.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = ({ message }) => {
  return (
    <div className="toast-container">
      <div className="toast-content">
        {message}
      </div>
    </div>
  );
};

const ItemDetail = ({ producto }) => {

  const [compra, setCompra] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
    setCompra(true);
    toast.success(<ToastComponent message="Felicitaciones! agregaste un producto" />, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const stockInCart = itemQuantity(producto.id)

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={producto.image} alt={producto.name} />
        <div>
          <h5>{producto.name}</h5>
          <p className="text-capitalize">Categoría: {producto.category}</p>
          <p>Precio: ${producto.price}</p>
          <p>{producto.description}</p>

          {compra ? (
            <div>
              <Link to="/" className="btn btn-success mb-2">
                Seguir Comprando
              </Link>
              <Link to="/cart" className="btn btn-success ms-2 mb-2">
                Ir al Carrito
              </Link>
            </div>
          ) : (
            <ItemCount stock={producto.stock - stockInCart} onAdd={onAdd} />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
