import React from 'react';

function CallButton() {
  const phoneNumber = "9905234866"; 
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  
  return (
    <button onClick={handleCallClick} className="call-button">
      📞 Call Now
    </button>
  );
}

export default CallButton;