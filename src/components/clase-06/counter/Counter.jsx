import React from 'react'
import { CounterButtonsContainerStyled, CounterContainerStyled, CounterSpanStyled } from './CounterStyles'
import { Add } from './add/Add'
import { Substract } from './substract/Substract'
import { useCountContext } from '../context/CountContext'
import { Reset } from './reset/Reset'

export const Counter = () => {

  // const [count, setCount] = useState(0)

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  const { state } = useCountContext();

  return (
    <>
      <CounterContainerStyled>

        <CounterButtonsContainerStyled>         
          <Substract />
          <CounterSpanStyled> { state.count } </CounterSpanStyled>
          <Add />
        </CounterButtonsContainerStyled>

        <Reset />
      </CounterContainerStyled>
    </>
  )
}
