import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { Link } from 'react-router-dom';

const Form = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { isDirty, isValid } } = useForm();
    const [orderId, setOrderId] = useState('');
    const { cart, cartPriceTotal, clear } = useContext(CartContext);

    const finalizarCompra = user => {
        if (cart.length === 0) {
            alert("No se puede generar la compra. No hay ningún producto en el carrito!");
            return;
        }

        if (user.Email !== user.Email2) {
            alert("Los correos electrónicos no coinciden.");
            return;
        }

        let order = {
            user,
            items: cart,
            total: cartPriceTotal(),
            date: serverTimestamp()
        }

        const ventas = collection(db, 'orders');

        addDoc(ventas, order)
            .then((res) => {
                cart.forEach((item) => {
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                        .then((dbDoc) => {
                            updateDoc(docRef, { stock: dbDoc.data().stock - item.quantity })
                        })
                })
                setOrderId(res.id)
                clear()
                onSubmit(user, cart, cartPriceTotal(), res.id);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            {orderId !== ''
                ? <div>
                    <h4 className='m-3 mb-3 mt-5 text-success'>Felicitaciones! Generaste tu orden!</h4>
                    <h5 className='m-3'>El id de tu compra es: {orderId}</h5>
                    <Link className='m-3 mb-2 btn btn-success' to='/'>Volver al inicio</Link>
                </div>
                :
                <div>
                    <h4 className='m-3 mb-5 mt-5 text-success'>Ingrese sus datos para finalizar la compra</h4>
                    <form className='d-flex justify-content-center flex-column align-items-start m-5' onSubmit={handleSubmit(finalizarCompra)}>
                        <input className='mb-2' type="text" placeholder="Nombre" {...register("First name", { required: true, maxLength: 80 })} />
                        <input className='mb-2' type="text" placeholder="Apellido" {...register("Last name", { required: true, maxLength: 100 })} />
                        <input className='mb-2' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <input className='mb-2' type="email" placeholder="Reingrese su email" {...register("Email2", { required: true, pattern: /^\S+@\S+$/i })} />
                        <input className='mb-2' type="tel" placeholder="Teléfono" {...register("Mobile number", { required: true, minLength: 6, maxLength: 13 })} />
                        <button className='mb-2 btn btn-success' type='submit' disabled={!isDirty || !isValid}>Enviar</button>
                    </form>
                </div>}
        </div>
    );
}

export default Form;
