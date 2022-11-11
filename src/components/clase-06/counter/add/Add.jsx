import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaRegTimesCircle } from 'react-icons/fa'
import { RiNumber5 } from 'react-icons/ri'
import { useCountContext } from '../../context/CountContext'
import { TYPES } from '../countActions'
import { CounterButtonStyled } from '../CounterStyles'

export const Add = () => {
  const { dispatch } = useCountContext();

  const handleIncrement = () => dispatch( { type: TYPES.INCREMENT } )
  const handleMultiply = () => dispatch( { type: TYPES.MULTIPLY } )
  const handleIncrement_5 = () => dispatch( { type: TYPES.INCREMENT_5 } )

  return (
    <>
          <CounterButtonStyled onClick={ handleIncrement }>
            <AiOutlinePlusCircle size="14px" color='white'/>
          </CounterButtonStyled>

          <CounterButtonStyled onClick={ handleIncrement_5 }>
            <p>
              +<RiNumber5 size="14px" color='white'/>
            </p>
          </CounterButtonStyled>

          <CounterButtonStyled onClick={ handleMultiply }>
            <FaRegTimesCircle size="14px" color='white'/>
          </CounterButtonStyled>
    </>
  )
}
