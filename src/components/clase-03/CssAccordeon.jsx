import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import './styles/accordeon.css'


const accordion = {
  width: '600px',
  boxShadow: 'rgba(0,0,0,0.8) 0px 5px 15px 0px'
}



export const CssAccordeon = ({ items }) => {
  return (
    <>
      <div style={accordion}>
        {items.map((item, index) => {
          return (
            <AccordionItem 
              key={index}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </>
  )
}

const AccordionItem = ({title, text}) => {

  const [isActive, setIsActive] = useState(false);

  return(
    <> 
      <div className='accordionTitleContainer' onClick={ () => setIsActive(!isActive) }>
        <h3 className='accordionTitle'> { title } </h3>
        <p className='icon'>
          {isActive ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </p>
      </div>
      {isActive && (
        <p className='accordionContent'>
          { text }
        </p>
      )}
    </>
  )
}


