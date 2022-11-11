import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { FiDivideCircle } from 'react-icons/fi'
import { RiNumber5 } from 'react-icons/ri'
import { useCountContext } from '../../context/CountContext'
import { TYPES } from '../countActions'
import { CounterButtonStyled } from '../CounterStyles'

export const Substract = () => {

  const { dispatch } = useCountContext();
  console.log(dispatch);

  const handleDecrement = () => dispatch( { type: TYPES.DECREMENT } )
  const handleDecrement_5 = () => dispatch( { type: TYPES.DECREMENT_5 } )
  const handleDivide = () => dispatch( { type: TYPES.DIVIDE } )

  return (
    <>
      <CounterButtonStyled left onClick={ handleDivide }>
        <FiDivideCircle size="14px" color='white'/>
      </CounterButtonStyled>

      <CounterButtonStyled left onClick={ handleDecrement_5 }>
        <p>
          - <RiNumber5 size="14px" color='white'/>
        </p>
      </CounterButtonStyled>

      <CounterButtonStyled left onClick={ handleDecrement }>
        <AiOutlineMinusCircle size="14px" color='white'/>
      </CounterButtonStyled>
    </>
  )
}
