import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
   <section className='c-wrapper'>
    <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
            <span className='orange-text'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact us</span>
            <span className='secondary-text'>We always ready to help by providing best services for you.We are here to bring a pleaceful life for you</span>
            <div className="flexColStart contactModes">
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondary-text'>0112569000</span>
                                
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondary-text'>0112569000</span>
                                
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>
                </div>
                <div className="flexStart row">
                <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span>
                                <span className='secondary-text'>0112569000</span>
                                
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondary-text'>0112569000</span>
                                
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div></div>
            </div>
 </div>
        <div className="c-right">
            <div className="image-container">
                <img src='./au.png' alt=''/>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Contact
