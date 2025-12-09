import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router';
function WhatsAppButton() {
    const navigate = useNavigate();
  

  const handleClick = () => {
    navigate("/LoginUI");
   
  };
  
  return (
    <button onClick={handleClick} className="btn-secondary flex justify-center items-center gap-2">
      <FaWhatsapp size={22} color='green' /> WhatsApp
    </button>
  );
}

export default WhatsAppButton;