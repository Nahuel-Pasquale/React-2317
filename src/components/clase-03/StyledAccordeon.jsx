import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled from 'styled-components';

export const Accordion = styled.div`
  width: ${ ({ width }) => width };
  box-shadow: rgba(0,0,0,0.8) 0px 5px 15px 0px;  
`

const AccordionTitleContainer = styled.div`
  width: 100%;
  background-color: #131415;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  gap: 20px;
`

const AccordionTitle = styled.h3`
  color: white;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 30px; 
`

const Icon = styled.p`
  color: white;
  font-size: 1.2rem;
  /* padding: 0px 30px;   */
`

const AccordionContent = styled.p`
  padding: 0px 30px;
  color: grey;
  font-size: 1.2rem;
`


export const StyledAccordeon = ({ items }) => {
  return (
    <>
      <Accordion width='600px'>
        {items.map((item, index) => {
          return (
            <AccordionItem 
              key={index}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </Accordion>
    </>
  )
}

const AccordionItem = ({title, text}) => {

  const [isActive, setIsActive] = useState(false);

  return(
    <> 
      <AccordionTitleContainer onClick={ () => setIsActive(!isActive) }>
        <AccordionTitle className='accordionTitle'> { title } </AccordionTitle>
        <Icon className='icon'>
          {isActive ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </Icon>
      </AccordionTitleContainer>
      {isActive && (
        <AccordionContent className='accordionContent'>
          { text }
        </AccordionContent>
      )}
    </>
  )
}
