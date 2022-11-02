import React from 'react'

export const Propiedades = (props) => {
  return (
    <>
      <ul className={props.className}>
        <li> {props.string} </li>
        <li> {props.number} </li>
        <li> {props.booleano ? 'True' : 'False'} </li>
        <li> {props.array.join('')} </li>
        <li> 
          {props.objeto.nombre + ' ' + props.objeto.email}
        </li>
        <li> {props.array.map(props.funcion)} </li>
        <li> {props.elementoReact} </li>
        {props.booleano && <li> {props.componenteReact} </li>}
      </ul>
    </>
  )
}

const funcion = () => {
  console.log('Por defecto no rompas, por favor')
}


Propiedades.defaultProps = {
  string: 'Soy una prop default',
  objeto: {
    nombre: 'Nahuel',
    email: 'n@gmail.com'
  },
  array: [],
  funcion: funcion
}
