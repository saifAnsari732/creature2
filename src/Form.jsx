import { useState } from "react";
import "./Form.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import  machn1 from '../public/mach1.jpg';
import logo from '../public/logo.png';

export default function LoginUI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setlocation] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

const phoneNumber = "919905234866"; 
  const imageULR="https://tse2.mm.bing.net/th/id/OIP.aworFNfRd8aCanceHFjEPAHaGS?pid=Api&P=0&h=180"

  const message = `Hello, I'm interested in your machinery products! 
Please provide more details about pricing and specifications.
Check Out My Details :- NAME= ${name} EMAIL= ${email} LOCATION= ${location}!   PRODUCTURL= ${imageULR}`; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}${machn1}`;

  const handleLogin = () => {
    window.open(whatsappUrl, '_blank');
    
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Decorative Elements */}
        <div className="decoration decoration-circle-1"></div>
        <div className="decoration decoration-circle-2"></div>

        {/* Logo/Header */}
        <div className="login-header">
          <div className="logo-icon">
            <img src={logo} alt="MachineHub Logo" className="h-14 flex justify-center items-center" />
            </div>
          <h1 className="login-title">MachineHub</h1>
          <p className="login-subtitle">Industrial Machinery Portal</p>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
         {/* NAME */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Enter Name</label>
            <div className="input-wrapper">
              <input
                id="name"
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              />
            </div>
            
          </div>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>
            
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">Location</label>
            <div className="input-wrapper">
              <input
                id="password"
                // type={showPassword ? "text" : "password"}
                placeholder="Enter your Location"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>

 

          {/* Sign In Button */}
          <button type="submit" className={`signin-button `}>
          
              Send
          </button>
        </form>


      
      </div>
    </div>
  );
}