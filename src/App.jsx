import React from 'react'
import Home from './Home'
import WhatsAppButton from './whatsapp'
import CallButton from './Call'
import LoginUI from './Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router';



function App() {
  return (
    <>
    <Router>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginUI" element={<LoginUI />} />
   </Routes>
    </Router>
{/* <Home/> */}
    </>
  )
}

export default App
