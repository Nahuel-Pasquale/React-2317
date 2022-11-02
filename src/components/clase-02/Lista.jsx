import React from 'react'
import { ComponentReact } from './ComponentReact'
import { Propiedades } from './Propiedades'

export const Lista = () => {
  return (
    <>
      <Propiedades 
        className='lista'
        string='Esto es un string'
        number={20}
        booleano
        array={[1,2,3]}
        objeto={{nombre: 'Nahu', email: 'npasquale@gmail.com'}}
        elementoReact={<i> Esto es un elemento de React </i>}
        funcion={num => {
            console.log('NUM ==> ', num * num)
            return <li key={(num * num).toString()} > {num * num} </li>
          }
        }
        componenteReact={
          <ComponentReact 
            msg='Hola, soy un componente de React que pasate como prop'
          />
        }
      />
    </>
  )
}

