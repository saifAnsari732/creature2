import React from 'react';

function WhatsAppButton() {
  const phoneNumber = "919905234866"; 
  const message = "Hello, I'm interested in your services!"; 
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
    
  };
  
  return (
    <button onClick={handleClick} className="whatsapp-button px-6 py-6 bg-green-500 text-white rounded-full top-4 left-4 shadow-lg hover:bg-green-600 transition duration-300">
      Contact on WhatsApp
    </button>
  );
}

export default WhatsAppButton;