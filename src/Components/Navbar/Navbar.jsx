import React from 'react'
import './Navbar.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Andrew</div>
            <div className="toggle">
                <Moon/>
                <Sun/>
                <div className="t-button">
                    
                </div>
            </div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar