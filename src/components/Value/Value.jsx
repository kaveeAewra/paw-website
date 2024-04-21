import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  const [className, setClassName] = useState(null); 

  return (
    <section className='v-wrapper'>
      <div className="paddings innerWidth flexCenter v-container">
        <div className='v-left'>
          <div className="image-container">
            <img src='./aaww.jpg' alt=''/>
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className='orange-text'>Our Value</span>
          <span className='secondary-text'>Value We Give to You</span>
          <span className='primaryText'>Delivering exceptional service and meaningful solutions tailored to your needs, ensuring satisfaction and success. </span>
          <Accordion className='accordionItem' allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => (
              <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter accordionButton'>
                    <AccordionItemState>
                      {({expanded}) => {
                        const newClassName = expanded ? "expanded" : "collapsed";
                        return (
                          <>
                            <div className="flexCenter icon">{item.Icon}</div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={20}/>
                            </div>
                          </>
                        );
                      }}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondary-text">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
