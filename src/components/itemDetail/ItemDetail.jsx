import React, { useContext, useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './itemDetail.css';
import { NavLink } from 'react-router-dom';
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
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
    setCompra(true);
    toast.success(<ToastComponent message="Felicitaciones! agregaste un producto" />, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={producto.image} alt={producto.name} />
        <div>
          <h5>{producto.name}</h5>
          <p>Categoría: {producto.category}</p>
          <p>Precio: ${producto.price}</p>
          <p>{producto.description}</p>
          
          {compra ? (
            <div>
               <NavLink to="/" className="btn btn-success">
                Seguir Comprando
              </NavLink>
              <NavLink to="/cart" className="btn btn-success ms-2">
                Ir al Carrito
              </NavLink>
            </div>
          ) : (
            <ItemCount stock={producto.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
