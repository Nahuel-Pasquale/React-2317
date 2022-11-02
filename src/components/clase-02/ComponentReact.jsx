import React from 'react'

export const ComponentReact = (props) => {
  return (
    <>
      {props.msg}
    </>
  )
}

ComponentReact.defaultProps = {
  msg: 'soy un mensaje por defecto'
}
