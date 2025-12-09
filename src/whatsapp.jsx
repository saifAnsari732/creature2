import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const phoneNumber = "919905234866"; 
  const message = "Hello, I'm interested in your services!Plz provide more details."; 
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
    
  };
  
  return (
    <button onClick={handleClick} className=" btn-secondary flex justify-center items-center gap-2 ">
            <FaWhatsapp size={22} color='green' />  WhatsApp
    </button>
  );
}

export default WhatsAppButton;