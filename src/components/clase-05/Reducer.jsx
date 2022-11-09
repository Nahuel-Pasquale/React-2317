import React, { useReducer } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { Contexto } from './MiContexto'


const Title = styled.h1`
  color: ${props => props.color};
`

const Button = styled.button`
  background-color: ${props => props.bg};
  padding: 1rem 4rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  border: none;
`

export const Reducer = () => {

  const initialState = '';

  const { colorRed, colorBlue, colorGreen, title } = useContext(Contexto)

  const reducer = (state, action) => {
    switch (action.type) {
      case 'rojo':
        return colorRed;

      case 'verde':
        return colorGreen;

      case 'azul':
        return colorBlue;
    
      default:
        return state;
    }
  }

  const [color, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Title color={ color }> { title } </Title>
      <Button bg={ colorRed }
      onClick={ () => dispatch( { type: 'rojo' } ) }> Rojo </Button>

      <Button bg={ colorGreen }
      onClick={ () => dispatch( { type: 'verde' } ) }> Verde </Button>

      <Button bg={ colorBlue }
      onClick={ () => dispatch( { type: 'azul' } ) }> Azul </Button>
    </>
  )
}
