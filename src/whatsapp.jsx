import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import  machn1 from '../public/mach1.jpg';
function WhatsAppButton() {
  const phoneNumber = "919905234866"; 
  const imageULR="https://tse2.mm.bing.net/th/id/OIP.aworFNfRd8aCanceHFjEPAHaGS?pid=Api&P=0&h=180"
  const message = `Hello, I'm interested in your machinery products! 
Please provide more details about pricing and specifications.
Check this product image: ${imageULR}`; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}${machn1}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <button onClick={handleClick} className="btn-secondary flex justify-center items-center gap-2">
      <FaWhatsapp size={22} color='green' /> WhatsApp
    </button>
  );
}

export default WhatsAppButton;