import React from 'react';


const WhatsAppButton = () => {
  const phoneNumber = '+5493364312059';

  const handleWhatsAppClick = () => {

    let whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

   
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }


    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <button onClick={handleWhatsAppClick}>
        <img className='whatsapp-logo whatsapp-link' src="../images/whatsapplogo.png" alt="Contactanos por WhatsApp" />
      </button>
    </div>
  );
};

export default WhatsAppButton;