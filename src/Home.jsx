import React from 'react';
import './Home.css';
import {PhoneForwarded}from 'lucide-react';
// import machineryImage from '../public/mach1.jpg';
import machineryImage2 from '../public/mach2.jpeg';
import machineryImage3 from '../public/mach3.jpeg';
import machineryImage4 from '../public/mach4.jpg';
import machineryvideo from '../public/food-video.mp4';
import Footer from './Footer';
import MobileNavbar from './Navigation';
import { FaWhatsapp } from "react-icons/fa";
function Home() {
    return (
        <div className="home-page">
            {/* Header Section */}
            <header className="header ">
                <div className="header-content ">
                    <h1 className="logo">🏭 MachineHub</h1>
                    <nav className="nav ">
                        <a href="#home">Home</a>
                        <a href="#products">Products</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <div className=" her bg-gray-600   text-white ">
             <video src={machineryvideo} className='h-screen w-full object-cover opacity-30 z-999999999' autoPlay loop muted></video>
              <div className="carousel-caption d-none  flex justify-center items-center flex-col  absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
                 {/* <h1 className='text-1xl font-semibold w-200px text-gray-800 relative left-0'> Welcome To Creative Industries <br /> 
                    </h1> */}
                 <h1 className='text-7xl text-gray-900 font-bold '>Experience The future <span className='relative left-40'> Machinery</span> </h1>
                 <br />
                  <div>

                    <p className='text-gray-300 font-semibold'>Your One-Stop Shop for Industrial Machinery Food processing machines <br /> are diverse tools hed food, covering washing, cutting, mixing, cooking, and packaging, enhancing safety,</p>
                  </div>
                   
                    <p className=''> </p> <br /> <br />
                   <div className=' flex gap-10'>

                    <a href='#products'  className="cta-button mt-6 ">Explore Now</a>
                    <button className="cta-button2 mt-6">Quick View</button>
                   </div>

          </div>
            </div>

            {/* Featured Products Section */}
            <section className="products" id="products">
                <h2>Featured Machinery</h2>
                <div className="products-grid">
                    {/* Card 1 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage2} alt="Industrial Robot" />
                            <span className="discount-badge">20% OFF</span>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            {/* <div className="card-rating"> */}
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            {/* </div> */}
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-primary flex justify-center items-center gap-2   "> <PhoneForwarded  size={22}  /> Book</button>
                                <button className="btn-secondary flex justify-center items-center gap-2 "> <FaWhatsapp size={22} color='green' />  View Details</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage3} alt="Industrial Robot" />
                            <span className="discount-badge">20% OFF</span>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            {/* <div className="card-rating"> */}
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            {/* </div> */}
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-primary flex justify-center items-center gap-2   "> <PhoneForwarded  size={22}  /> Book</button>
                                <button className="btn-secondary flex justify-center items-center gap-2 "> <FaWhatsapp size={22} color='green' />  View Details</button>
                            </div>
                        </div>
                    </div>
                     {/* Card 3 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage3} alt="Industrial Robot" />
                            <span className="discount-badge">20% OFF</span>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            {/* <div className="card-rating"> */}
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            {/* </div> */}
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-primary flex justify-center items-center gap-2   "> <PhoneForwarded  size={22}  /> Book</button>
                                <button className="btn-secondary flex justify-center items-center gap-2 "> <FaWhatsapp size={22} color='green' />  View Details</button>
                            </div>
                        </div>
                    </div>
                     {/* Card 4 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage4} alt="Industrial Robot" />
                            <span className="discount-badge">20% OFF</span>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            {/* <div className="card-rating"> */}
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            {/* </div> */}
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-primary flex justify-center items-center gap-2   "> <PhoneForwarded  size={22}  /> Book</button>
                                <button className="btn-secondary flex justify-center items-center gap-2 "> <FaWhatsapp size={22} color='green' />  View Details</button>
                            </div>
                        </div>
                    </div>
                     {/* Card 5 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage3} alt="Industrial Robot" />
                            <span className="discount-badge">20% OFF</span>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            {/* <div className="card-rating"> */}
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            {/* </div> */}
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-primary flex justify-center items-center gap-2   "> <PhoneForwarded  size={22}  /> Book</button>
                                <button className="btn-secondary flex justify-center items-center gap-2 "> <FaWhatsapp size={22} color='green' />  View Details</button>
                            </div>
                        </div>
                    </div>
                     {/* Card 1 */}
                    <div className="beautiful-card">
                        <div className="card-image-wrapper">
                            <img src={machineryImage2} alt="Industrial Robot" />
                            <span className="discount-badge">20% OFF</span>
                        </div>
                        <div className="card-content">
                            <h3>Heavy Duty Industrial Robot</h3>
                            <p className="card-description">Robotic system for manufacturing</p>
                            {/* <div className="card-rating"> */}
                                <span className="stars">★★★★★</span>
                                <span className="rating-text">(125)</span>
                            {/* </div> */}
                            <div className="card-price">
                                <span className="original-price">₹89,999</span>
                                <span className="sale-price">₹71,999</span>
                            </div>
                            <div className="card-actions">
                                <button className="btn-primary flex justify-center items-center gap-2   "> <PhoneForwarded  size={22}  /> Book</button>
                                <button className="btn-secondary flex justify-center items-center gap-2 "> <FaWhatsapp size={22} color='green' />  View Details</button>
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