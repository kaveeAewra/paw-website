import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>
            <div className="flexColStart f-left">
                <span className='primaryText'>Paw.</span>
                <span className="secondary-text">
                Let us make you all happy with a doggy.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondary-text'>101 ,Colombo Road ,Dehiwala, Sri Lanka</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Clinic</span>
                    <span>About Us</span>
                </div>
            </div>


        </div>
        
    </section>
  )
}

export default Footer
