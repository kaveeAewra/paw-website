import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup'





const Hero = () => {
  return (
    <section className='hero-wrapper'>
       <div className='paddings innerWidth flexCenter hero-container'>
       
        <div className='flexColStart hero-left'>
            <div className="hero-title">
                <div className="orange-circle"/>
                <h1>
                Take <br/>Me Home
                </h1>
            </div>
            <div className='flexColStart hero-des'>
                <span> Find your new best friend today!</span>
            </div>
            <div className ="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
                <input type="text"/>
                <button className='button'>Search</button>
            </div>
            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={1100} end={9800} duration={4}/>


                    <span>+</span>

                    </span>
                    <span className='secondary-text'>Premium <br/> Product</span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp  end={900} duration={4}/>


                    <span>+</span>

                    </span>
                    <span className='secondary-text'>Happy <br/>Customers</span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp  end={6} duration={4}/>


                    <span>+</span>

                    </span>
                    <span className='secondary-text'>Ratings</span>
                </div>
            </div>

        </div>
        <div className='flexCenter hero-right'>
            <div className="image-container">
                <img src ="s.jpg" alt=""/>

            </div>
        </div>

       </div>
    </section>
  )
}

export default Hero
