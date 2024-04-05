import emailjs from '@emailjs/browser';
import Form from '../form/Form';

const Checkout = () => {


  const sendEmail = (user, cart, cartPriceTotal, orderId) => {

    emailjs.send('service_qbem2zn', 'template_bj2p2kv', {
      to_name: user["First name"],
      user_email: user["Email"],
      message: `      
    Detalles de la compra:
    ID: ${orderId}
    ---------------------------------

    Productos:\n
    ${cart.map(item => `${item.name} - Precio: $${item.price} - Cantidad: ${item.quantity}`).join('\n')}

    Precio Total: $${cartPriceTotal}
      `
    }, 'xJ5O5HweDcam0Mxft')
      .then(() => {
        alert('Compra realizada con éxito! chequeá tu casilla de correo');
      })
      .catch((error) => {
        console.error('Error al enviar correo electrónico:', error);
      });
  };

  return (
    <Form onSubmit={sendEmail} />
  );
};

export default Checkout
