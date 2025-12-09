import React from 'react';
import './Home.css';

import machineryImage from '../public/mach1.jpg';
import machineryImage2 from '../public/mach2.jpeg';
import machineryImage3 from '../public/mach3.jpeg';
import machineryImage5 from '../public/mach5.avif';
import machineryImage6 from '../public/mach6.avif';
import machineryImage7 from '../public/mach7.png';
import machineryImage8 from '../public/mach8.jpg';
import machineryImage9 from '../public/mach9.avif';
import machineryImage10 from '../public/mach10.jpg';
// LOGO
import logo from '../public/logo.png';


import Footer from './Footer';
import MobileNavbar from './Navigation';
import CallButton from './Call';
import WhatsAppButton from './whatsapp';
import { FaSearch } from "react-icons/fa";
// VIDEO ICON
import machineryvideo from '../public/food-video.mp4';

import v1 from '../public/videoicon/big-sale.mp4';
import v2 from '../public/videoicon/sale.mp4';
import v3 from '../public/videoicon/sales1.mp4';
import v4 from '../public/videoicon/sales2.mp4';
import v5 from '../public/videoicon/sales.mp4';
function Home() {
    return (
        <div className="home-page">
            {/* Header Section */}
            <header className="header">
                <div className="header-content">
                    <img src={logo} alt="MachineHub Logo" className="header-logo" />
                    <h1 className="logo">MachineHub</h1>
                    <nav className="nav">
                        <a href="#home">Home</a>
                        <a href="#products">Products</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section with Video */}
            <section id='home' className="hero-video-section">
                <video 
                    src={machineryvideo} 
                    className="hero-video" 
                     muted               
                     playsInline        
                     preload="metadata"    
                     webkit-playsinline="true" 
                     x5-playsinline="true"    
                     autoPlay            
                     loop                 
                     disablePictureInPicture 
                ></video>
                <div className="hero-overlay">
                    <div className="hero-text-content">
                        <h1 className="hero-title">Experience The Future Machinery</h1>
                        <p className="hero-subtitle">
                            Your One-Stop Shop for Industrial Machinery - Food processing machines covering washing, cutting, mixing, cooking, and packaging
                        </p>
                        {/* <FaSearch size={27} className=' inline   mb-3.5  '/> */}

                        {/* <input type="text" id='serch' className='border-1 rounded-2xl px-4 py-6 h-8 w-[300px] placeholder:col border-gray-400 ' placeholder='Serach here' name=""  /> */}
                        <div className="hero-buttons ">
                            <a href='#products' className="cta-button">Explore Now</a>
                            <button className="cta-button2">Quick View</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="products" id="products">
                <h2>Featured Machinery</h2>
                <div className="products-grid">
                    {/* Card 1 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage2} alt="Industrial Robot" />
                            {/* <span className="discount-badge">  </span> */}
                            <video 
                            className='discount-badge h-12 rounded-full '
                            src={v1} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage} alt="Industrial Robot" />
                            {/* <span className="discount-badge">20% OFF</span> */}
                              <video 
                            className='discount-badge h-12 rounded-full '
                            src={v2} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage3} alt="Industrial Robot" />
                           
                            {/* <span className="discount-badge">20% OFF</span> */}
                              <video 
                            className='discount-badge h-12 rounded-full '
                            src={v3} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹19,999</span>
                                <span className="sale-price">₹85,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage5} alt="Industrial Robot" />
                            {/* <span className="discount-badge">30% OFF</span> */}
                              <video 
                            className='discount-badge h-12 rounded-full '
                            src={v4} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹10,999</span>
                                <span className="sale-price">₹81,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage2} alt="Industrial Robot" />
                            {/* <span className="discount-badge">20% OFF</span> */}
                             <video 
                            className='discount-badge h-12 rounded-full '
                            src={v5} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹79,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage2} alt="Industrial Robot" />
                            {/* <span className="discount-badge">10% OFF</span> */}
                               <video 
                            className='discount-badge h-12 rounded-full '
                            src={v3} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹61,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                     {/* Card 6 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage6} alt="Industrial Robot" />
                            {/* <span className="discount-badge">10% OFF</span> */}
                               <video 
                            className='discount-badge h-12 rounded-full '
                            src={v3} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹61,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                     {/* Card 7 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage7} alt="Industrial Robot" />
                            {/* <span className="discount-badge">10% OFF</span> */}
                               <video 
                            className='discount-badge h-12 rounded-full '
                            src={v4} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹61,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                     {/* Card 8 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage8} alt="Industrial Robot" />
                            {/* <span className="discount-badge">10% OFF</span> */}
                               <video 
                            className='discount-badge h-12 rounded-full '
                            src={v2} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹61,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                     {/* Card 9 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage9} alt="Industrial Robot" />
                            {/* <span className="discount-badge">10% OFF</span> */}
                               <video 
                            className='discount-badge h-12 rounded-full '
                            src={v5} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹61,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                     {/* Card 10 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage10} alt="Industrial Robot" />
                            {/* <span className="discount-badge">10% OFF</span> */}
                               <video 
                            className='discount-badge h-12 rounded-full '
                            src={v1} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹61,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                     {/* Card 6 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage2} alt="Industrial Robot" />
                            {/* <span className="discount-badge">10% OFF</span> */}
                               <video 
                            className='discount-badge h-12 rounded-full '
                            src={v3} 
                              autoPlay 
                              loop 
                              muted
                             playsInline >
                    </video>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            <div className="card-rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            </div>
                            <div className="card-price">
                                <span className="original-price">₹99,999</span>
                                <span className="sale-price">₹61,999</span>
                            </div>
                            <div className="card-actions">
                                <CallButton />
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <MobileNavbar />
        </div>
    );
}

export default Home;