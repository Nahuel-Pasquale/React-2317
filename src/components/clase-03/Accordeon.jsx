import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { data } from '../../utils/data'
import styled from 'styled-components'

export const StyledAccordion = styled(Accordion)`
  width: 600px;
  box-shadow: rgba(0,0,0,0.8) 0px 5px 15px 0px; 
  gap: 20px;
  color: white;
`

const StyledAccordionItem = styled(AccordionItem)`
  background-color: #131415;
  text-align: left;
  padding: 10px;
`

const StyledAccordionButton = styled(AccordionButton)`
  color: white;
  background-color: #131415;
  font-size: 1rem;
  line-height: 1.5rem;
  border: none;
  padding: 15px;
  font-weight: bold;
`


const StyledAccordionIcon = styled(AccordionIcon)`
  color: white;
  font-size: 2rem;
`

const StyledAccordionPanel = styled(AccordionPanel)`
  color: grey;
  font-size: 1.2rem;
  padding: 15px;
`

const StyledBox = styled(Box)`
  
`


export const Accordeon = () => {
  return (
    <>
      <StyledAccordion allowToggle>
        {data.map((item, index) => {
          return (
            <StyledAccordionItem>
              <h2>
                <StyledAccordionButton>
                  <Box flex='1' textAlign='left'>
                    { item.title }
                  </Box>
                  <StyledAccordionIcon />
                </StyledAccordionButton>
              </h2>
              <StyledAccordionPanel>
                { item.text }
              </StyledAccordionPanel>
            </StyledAccordionItem>
          )
        })}
      </StyledAccordion>
    </>
  )
}
