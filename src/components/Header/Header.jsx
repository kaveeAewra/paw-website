import React, { useState } from 'react';
import './Header.css';


const Header = () => {
  

  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="dd.png" alt="logo" width={100} />
          
              <div className="flexCenter h-menu">
                <a href="">Home</a>
                <a href="">Breads</a>
                <a href="">Locations</a>
                <a href="">Contact</a>
                <a href="">New</a>
                <div className="buttons">
                  <a href="" className="btn">
                    <i className="fa fa-sign-in"></i> Login
                  </a>
                  <a href="" className="btn">
                    <i className="fa fa-sign-in"></i> SignUp
                  </a>
                </div>
              </div>
            
          </div>
        
      </section>
    </>
  );
};

export default Header;