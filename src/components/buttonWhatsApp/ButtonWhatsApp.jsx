import React from 'react';


const WhatsAppButton = () => {
  const phoneNumber = '+5493364312059'; // Tu número de WhatsApp

  const handleWhatsAppClick = () => {
    // Definir el enlace de WhatsApp
    let whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Si es una versión de escritorio, redirige a WhatsApp Web
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }

    // Abrir el enlace en una nueva ventana
    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <button className='whatsapp-link' onClick={handleWhatsAppClick}>
        <img className='whatsapp-logo' src="../images/whatsapplogo.png" alt="Contactanos por WhatsApp" />
      </button>
    </div>
  );
};

export default WhatsAppButton;