import { PhoneForwarded } from 'lucide-react';
import React from 'react';

function CallButton() {
  const phoneNumber = "9905234866"; 
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  
  return (
    <button onClick={handleCallClick} className=" btn-primary border-2 flex flex-1 rounded-md  justify-center items-center gap-2 ">
    <PhoneForwarded  size={22}  />  Call Now
    </button>
  );
}

export default CallButton;