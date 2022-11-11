import React from 'react'
import { BiReset } from 'react-icons/bi'
import { useCountContext } from '../../context/CountContext'
import { TYPES } from '../countActions';

export const Reset = () => {

  const { dispatch } = useCountContext();

  const handleReset = () => dispatch( { type: TYPES.RESET } )

  return (
    <>
        <BiReset 
        cursor='pointer'
        size='40px'
        color='#F24C4C'
        onClick={ handleReset }
        />
    </>
  )
}
